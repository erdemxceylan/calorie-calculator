import React from 'react';
import { Dialog } from 'primereact/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../global/redux/modal';
// import { Button } from 'primereact/button';

function LoginModal() {
   const showLogin = useSelector(state => state.modal.showLogin);
   const dispatch = useDispatch();

   function closeHandler() {
      dispatch(modalActions.hideLogin());
   }

   return (
      <Dialog
         className={null}
         header="Login or Sign up"
         visible={showLogin}
         onHide={closeHandler}
         footer={null}
      >
         <p>Hi</p>
      </Dialog>
   );
}

export default LoginModal;
