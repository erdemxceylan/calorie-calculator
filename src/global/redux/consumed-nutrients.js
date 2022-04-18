import { createSlice } from '@reduxjs/toolkit';

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
      addConsumedNutrient(state, action) {
         const existingIndex = state.consumedNutrients.findIndex(nutrient => nutrient.id === action.payload.id);

         if (existingIndex >= 0) {
            const existingNutrient = state.consumedNutrients[existingIndex];
            const updatedNutrient = {
               id: existingNutrient.id,
               name: existingNutrient.name,
               unit: existingNutrient.unit,
               consumedQuantity: +existingNutrient.consumedQuantity + +action.payload.consumedQuantity,
               caloriesTaken: existingNutrient.caloriesTaken + action.payload.caloriesTaken,
               proteinsTaken: existingNutrient.proteinsTaken + action.payload.proteinsTaken
            };
            state.consumedNutrients[existingIndex] = updatedNutrient;
         } else {
            state.consumedNutrients = [...state.consumedNutrients, action.payload];
         }

         state.totalCalories += action.payload.caloriesTaken;
         state.totalProteins += action.payload.proteinsTaken;

         if (state.consumedNutrients.length > 0) {
            state.isConsumedNutrientsEmpty = false;
         } else {
            state.isConsumedNutrientsEmpty = true;
         }
      },
      updateConsumedNutrient(state, action) {
         const existingIndex = state.consumedNutrients.findIndex(nutrient => nutrient.id === action.payload.id);

         if (existingIndex >= 0) {
            const existingNutrient = state.consumedNutrients[existingIndex];
            const updatedNutrient = {
               id: existingNutrient.id,
               name: existingNutrient.name,
               unit: existingNutrient.unit,
               consumedQuantity: action.payload.consumedQuantity,
               caloriesTaken: action.payload.caloriesTaken,
               proteinsTaken: action.payload.proteinsTaken
            };
            state.consumedNutrients[existingIndex] = updatedNutrient;
            state.totalCalories += updatedNutrient.caloriesTaken - existingNutrient.caloriesTaken;
            state.totalProteins += updatedNutrient.proteinsTaken - existingNutrient.proteinsTaken;
         }
      },
      deleteConsumedNutrient(state, action) {
         const updatedConsumedNutrients = state.consumedNutrients.filter(nutrient => nutrient.id !== action.payload.id);
         state.consumedNutrients = updatedConsumedNutrients;
         state.totalCalories -= action.payload.calories;
         state.totalProteins -= action.payload.proteins;

         if (state.consumedNutrients.length > 0) {
            state.isConsumedNutrientsEmpty = false;
         } else {
            state.isConsumedNutrientsEmpty = true;
         }
      }
   }
});

export const consumedNutrientsActions = consumedNutrientsSlice.actions;

export default consumedNutrientsSlice.reducer;
