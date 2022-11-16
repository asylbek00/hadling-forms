import { useRef, useState } from "react";

const BasicForm = (props) => {
  const basicReft = useRef();
  // console.log(basicReft);
  const [nameIsValue, setNameIsValue] = useState(true);
  const [name, setName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredFirstName = basicReft.current.value;
    setNameIsValue(true);
    setIsTouched(true);
    setName(e.target.value);
    if (enteredFirstName.trim().length < 3) {
      setNameIsValue(false);
      setIsTouched(false);
      return;
    }
    // console.log(enteredFirstName);
    basicReft.current.value = "";

  };
  const onBlurHandler = () => {
    setNameIsValue(true);
    setIsTouched(true);
    const enteredFirstName = basicReft.current.value;

    if (enteredFirstName.trim().length < 3) {
      setNameIsValue(false);
      setIsTouched(false);
      return;
    }
  };
  const onChangeHandler = (e) => {
    const enteredFirstName = basicReft.current.value;
    setNameIsValue(true);
    setIsTouched(true);
    setName(e.target.value);

    if (enteredFirstName.trim().includes("@")) {
      setNameIsValue(false);
      setIsTouched(false);
      return;
    }
    setName("");
  };
  const nameInputClasses = nameIsValue
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            ref={basicReft}
          />
          {!nameIsValue && (
            <p className="error-text">Значение инпута должна быть выше 3!</p>
          )}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={onBlurHandler}
            ref={basicReft}
            onChange={onChangeHandler}
          />
          {!nameIsValue && (
            <p className="error-text">Значение инпута должна быть выше 3!</p>
          )}
        </div>
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onBlur={onBlurHandler}
          ref={basicReft}
          onChange={onChangeHandler}
        />
        {!nameIsValue && (
          <p className="error-text">Значение инпута должна быть выше 3!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
