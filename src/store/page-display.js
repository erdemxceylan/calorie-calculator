import { createSlice } from "@reduxjs/toolkit";

const initialPageDisplayState = {
   displayHomePage: true,
   displayNutrientList: false
};

const pageDisplaySlice = createSlice({
   name: "page display",
   initialState: initialPageDisplayState,
   reducers: {
      displayHomePage(state) {
         state.displayHomePage = true;
         state.displayNutrientList = false;
      },
      displayNutrientList(state) {
         state.displayHomePage = false;
         state.displayNutrientList = true;
      }
   }
});

export const pageDisplayActions = pageDisplaySlice.actions;

export default pageDisplaySlice.reducer;
