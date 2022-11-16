import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [nameIsValed, setNameIsValid] = useState(true);
  const [name, setName] = useState("");
  const [isTouched, setisTouched] = useState(false);

  //_______________________________Первая способ - проверка с Submitом
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    setNameIsValid(true);
    setisTouched(true);

    if (enteredName.trim().length < 5) {
      setNameIsValid(false);
      setisTouched(false);
      // console.log("empty");
      return;
    }
    // console.log(enteredName);
    nameInputRef.current.value = "";
   };
  //________________________________Вторая способ -  проверка с фокусом

  const onBlurHandler = () => {
    setNameIsValid(true);
    setisTouched(true);

    // console.log("losing focus");
    const enteredName = nameInputRef.current.value;

    if (enteredName.trim() === '') {
      setNameIsValid(false);
      setisTouched(false);

      console.log("empty");
      return;
    }
  };

  //___________________________Третая способ - проиерка каждого нажатие инпута
  const onChangeHandler = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
    const enteredName = nameInputRef.current.value;
    setNameIsValid(true);
    setisTouched(true);

    if (enteredName.trim() === '') {
      setNameIsValid(false);
      setisTouched(false);

      console.log("empty");
      return;
    }
  };

  const nameInputClasses = nameIsValed
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValed && (
          <p className="error-text">Name should be more 5 characters!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
