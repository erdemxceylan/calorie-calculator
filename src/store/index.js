import { configureStore } from '@reduxjs/toolkit';
import consumedNutrientsReducer from './consumed-nutrients';
import dataSettingsReducer from './data-settings';
import pageDisplayReducer from './page-display';

const store = configureStore({
   reducer: {
      consumedNutrients: consumedNutrientsReducer,
      dataSettings: dataSettingsReducer,
      pageDisplay: pageDisplayReducer
   },
});

export default store;
