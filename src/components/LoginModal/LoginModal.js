import React from 'react';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../global/redux/modal';
import { Button } from 'primereact/button';
import mainStyles from '../../App.module.css';
import styles from './LoginModal.module.css';
import LoginModalForm from './components/LoginModalForm';
import useHttpRequest from '../../hooks/use-http-request';

const WEB_API_KEY = 'AIzaSyCayV-EV6nQ6yPmmyoxp8FaYswze90k_QA';
const BASE_URL_SIGN_UP = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const BASE_URL_SIGN_IN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const URL_FOR_SIGN_UP = BASE_URL_SIGN_UP + WEB_API_KEY;
const URL_FOR_SIGN_IN = BASE_URL_SIGN_IN + WEB_API_KEY;
const POST = 'POST';

function LoginModal() {
   const showLogin = useSelector(state => state.modal.showLogin);
   const isSigningUp = useSelector(state => state.modal.isSigningUp);
   const dispatch = useDispatch();
   const { sendRequest } = useHttpRequest();
   let formData = {};

   function closeHandler() {
      dispatch(modalActions.hideLogin());
   }

   function switchHandler() {
      dispatch(modalActions.switchSignup());
   }

   function getInputData(data) {
      formData = {
         email: data.enteredValues.email,
         password: data.enteredValues.password,
         isValid: data.isFormValid,
         reset: data.resetForm
      };
   }

   function submitHandler(event) {
      event.preventDefault();

      if (!formData.isValid) return;

      const url = isSigningUp ? URL_FOR_SIGN_UP : URL_FOR_SIGN_IN;

      sendRequest({
         url,
         method: POST,
         body: {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
         }
      }, data => console.log(data));

      formData.reset();
   }

   const submitButton = (
      <Button
         className='p-button-success'
         label={isSigningUp ? 'Sign up' : 'Login'}
         onClick={submitHandler}
      />
   );

   const switchButton = (
      <Button
         className={styles.switch}
         label={isSigningUp ? 'Login with an existing account' : 'Create a new account'}
         onClick={switchHandler}
      />
   );

   return (
      <Dialog
         className={mainStyles.modal}
         header={isSigningUp ? 'Sign up' : 'Login'}
         visible={showLogin}
         onHide={closeHandler}
         footer={switchButton}
      >
         <div className={styles.form}>
            <LoginModalForm sendInputData={getInputData} />
            {submitButton}
         </div>
      </Dialog>
   );
}

export default LoginModal;
