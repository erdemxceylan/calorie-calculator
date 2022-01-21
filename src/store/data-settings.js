import { createSlice } from '@reduxjs/toolkit';

const initialDataSettingsState = {
   showDataSettings: false
};

const dataSettingsSlice = createSlice({
   name: "data settings",
   initialState: initialDataSettingsState,
   reducers: {
      show(state) {
         state.showDataSettings = true;
      },
      hide(state) {
         state.showDataSettings = false;
      }
   }
});

export const dataSettingsActions = dataSettingsSlice.actions;

export default dataSettingsSlice.reducer;
