import { createSlice } from '@reduxjs/toolkit';

const initialDataSettingsModalState = {
   showDataSettings: false
};

const dataSettingsModalSlice = createSlice({
   name: "data settings modal",
   initialState: initialDataSettingsModalState,
   reducers: {
      show(state) {
         state.showDataSettings = true;
      },
      hide(state) {
         state.showDataSettings = false;
      }
   }
});

export const dataSettingsModalActions = dataSettingsModalSlice.actions;

export default dataSettingsModalSlice.reducer;
