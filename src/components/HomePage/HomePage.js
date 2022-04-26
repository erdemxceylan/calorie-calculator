import React from 'react';
import { useSelector } from 'react-redux';
import AddNutrientMenu from './components/AddNutrientMenu';
import ConsumedNutrientsTable from './components/ConsumedNutrientsTable';
import styles from '../../App.module.css';

function HomePage() {
   const isEmpty = useSelector(state => state.consumedNutrients.isEmpty);

   return (
      <div className={styles['page-layout']}>
         <AddNutrientMenu />
         {!isEmpty && <ConsumedNutrientsTable />}
      </div>
   );
}

export default HomePage;
