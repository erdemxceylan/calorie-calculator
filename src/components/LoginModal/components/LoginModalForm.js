import React from 'react';
import { InputText } from 'primereact/inputtext';
import useValidateInput from '../../../hooks/use-validate-input';
import mainStyles from '../../../App.module.css';

function LoginModalForm(props) {

   const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: enteredEmailHasError,
      valueChangeHandler: enteredEmailChangeHandler,
      inputBlurHandler: enteredEmailBlurHandler,
      reset: resetEnteredEmail
   } = useValidateInput(value => value.includes('@'));

   const {
      value: enteredPassword,
      isValid: enteredPasswordIsValid,
      hasError: enteredPasswordHasError,
      valueChangeHandler: enteredPasswordChangeHandler,
      inputBlurHandler: enteredPasswordBlurHandler,
      reset: resetEnteredPassword
   } = useValidateInput(value => value.length > 6);

   const areInputsValid = enteredEmailIsValid && enteredPasswordIsValid;

   function resetInputs() {
      resetEnteredEmail();
      resetEnteredPassword();
   };

   props.sendInputData({
      enteredValues: {
         email: enteredEmail,
         password: enteredPassword,
      },
      isFormValid: areInputsValid,
      resetForm: resetInputs
   });

   return (
      <React.Fragment>
         <InputText
            className={enteredEmailHasError ? mainStyles.invalid : null}
            placeholder='Email'
            value={enteredEmail}
            onChange={e => enteredEmailChangeHandler(e)}
            onBlur={enteredEmailBlurHandler}
         />
         <InputText
            className={enteredPasswordHasError ? mainStyles.invalid : null}
            placeholder='Password'
            value={enteredPassword}
            onChange={e => enteredPasswordChangeHandler(e)}
            onBlur={enteredPasswordBlurHandler}
         />
      </React.Fragment>
   );
}

export default LoginModalForm;
