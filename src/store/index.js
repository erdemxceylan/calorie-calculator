import { configureStore } from '@reduxjs/toolkit';

import consumedNutrientsReducer from './consumed-nutrients';
import dataSettingsReducer from './data-settings';

const store = configureStore({
   reducer: { consumedNutrients: consumedNutrientsReducer, dataSettings: dataSettingsReducer },
});

export default store;
