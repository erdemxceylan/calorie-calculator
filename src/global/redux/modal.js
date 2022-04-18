import { createSlice } from '@reduxjs/toolkit';

const initialModalState = {
   showDataSettings: false,
   showLogin: false
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
      }
   }
});

export const modalActions = ModalSlice.actions;

export default ModalSlice.reducer;
