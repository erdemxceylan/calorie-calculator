import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialConsumedNutrientsState = {
   totalCalories: 0,
   totalProteins: 0,
   consumedNutrients: [],
   isConsumedNutrientsEmpty: true
};

const consumedNutrientsSlice = createSlice({
   name: "consumed nutrients",
   initialState: initialConsumedNutrientsState,
   reducers: {
      updateConsumedNutrients(state, action) {
         const existingIndex = state.consumedNutrients.findIndex(nutrient => nutrient.id === action.payload.id);

         if (existingIndex >= 0) {
            const existingNutrient = state.consumedNutrients[existingIndex];
            const updatedNutrient = {
               id: existingNutrient.id,
               name: existingNutrient.name,
               consumedQuantity: +existingNutrient.consumedQuantity + +action.payload.consumedQuantity,
               caloriesTaken: existingNutrient.caloriesTaken + action.payload.caloriesTaken,
               proteinsTaken: existingNutrient.proteinsTaken + action.payload.proteinsTaken
            };
            state.consumedNutrients[existingIndex] = updatedNutrient;
            state.totalCalories += action.payload.caloriesTaken;
            state.totalProteins += action.payload.proteinsTaken;
         } else {
            state.consumedNutrients = [...state.consumedNutrients, action.payload];
            state.totalCalories += action.payload.caloriesTaken;
            state.totalProteins += action.payload.proteinsTaken;
         }

         if (state.consumedNutrients.length > 0) {
            state.isConsumedNutrientsEmpty = false;
         } else {
            state.isConsumedNutrientsEmpty = true;
         }
      }
   }
});

const store = configureStore({
   reducer: consumedNutrientsSlice.reducer
});

export const consumedNutrientsActions = consumedNutrientsSlice.actions;
export default store;
