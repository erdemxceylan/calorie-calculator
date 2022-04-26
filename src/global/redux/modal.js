import { createSlice } from '@reduxjs/toolkit';

const initialModalState = {
   showDataSettings: false,
   showLogin: false,
   isSigningUp: false
};

const ModalSlice = createSlice({
   name: "modal",
   initialState: initialModalState,
   reducers: {
      showDataSettings(state) {
         state.showDataSettings = true;
      },
      hideDataSettings(state) {
         state.showDataSettings = false;
      },
      showLogin(state) {
         state.showLogin = true;
      },
      hideLogin(state) {
         state.showLogin = false;
      },
      switchSignup(state) {
         state.isSigningUp = !state.isSigningUp;
      }
   }
});

export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;
