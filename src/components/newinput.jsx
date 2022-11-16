import { useInput } from "./utils/hooks/useInput";

const Newinput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredGmail,
    isValid: enteredGmailIsValid,
    hasError: gmailInputHasError,
    valueChangeHandler: gmailChangeHandler,
    inputBlurHandler: gmailBlurHandler,
  } = useInput((value) => value.includes ("@") );

  let formIsValid = false;
  if (enteredNameIsValid && enteredGmailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const gmailInputClasses = gmailInputHasError
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name should be more 5 characters!</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="gmail">Your Name</label>
        <input
          type="email"
          id="gmail"
          value={enteredName}
          onBlur={gmailBlurHandler}
          onChange={gmailChangeHandler}
        />
        {gmailInputHasError && (
          <p className="error-text">Name should be more 5 characters!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Newinput;
