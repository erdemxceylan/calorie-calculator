import { createSlice } from '@reduxjs/toolkit';

const initialPageDisplayState = {
   showHomePage: true,
   showNutrientList: false
};

const pageDisplaySlice = createSlice({
   name: "page display",
   initialState: initialPageDisplayState,
   reducers: {
      showHomePage(state) {
         state.showHomePage = true;
         state.showNutrientList = false;
      },
      showNutrientList(state) {
         state.showHomePage = false;
         state.showNutrientList = true;
      }
   }
});

export const pageDisplayActions = pageDisplaySlice.actions;

export default pageDisplaySlice.reducer;
