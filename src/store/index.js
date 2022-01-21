import { configureStore } from '@reduxjs/toolkit';
import consumedNutrientsReducer from './consumed-nutrients';
import dataSettingsReducer from './data-settings';
import pageReducer from './page';

const store = configureStore({
   reducer: {
      consumedNutrients: consumedNutrientsReducer,
      dataSettings: dataSettingsReducer,
      page: pageReducer
   },
});

export default store;
