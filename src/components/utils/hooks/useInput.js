import { useState } from "react";

export const useInput = (validateState) => {
  const [enteredValue, setEnteredvalue] = useState(""); //for input
  const [isTouched, setisTouched] = useState(false); //for focus

  //проверка
  const valueIsValid = validateState(enteredValue); //true  || false
  const hasError = !valueIsValid && isTouched;


  function valueChangeHandler(e) {
    setEnteredvalue(e.target.value);
  }
  function inputBlurHandler() {
    setisTouched(true);
  }
  return {
    //возврашает обьект
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
