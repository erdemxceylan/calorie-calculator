import { configureStore } from '@reduxjs/toolkit';
import consumedNutrientsReducer from './consumed-nutrients';
import dataSettingsModalReducer from './data-settings-modal';
import pageReducer from './page';

const store = configureStore({
   reducer: {
      consumedNutrients: consumedNutrientsReducer,
      dataSettingsModal: dataSettingsModalReducer,
      page: pageReducer
   },
});

export default store;
