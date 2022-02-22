import { createSlice } from '@reduxjs/toolkit';

const initialPageState = {
   showHomePage: true,
   showNutrientList: false
};

const pageSlice = createSlice({
   name: "page",
   initialState: initialPageState,
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

export const pageActions = pageSlice.actions;

export default pageSlice.reducer;
