import React from 'react';
import { useSelector } from 'react-redux';
import AddNutrientMenu from './components/AddNutrientMenu';
import ConsumedNutrientsTable from './components/ConsumedNutrientsTable';
import styles from '../../App.module.css';
import TotalStatus from './components/TotalStatus';

function HomePage() {
   const isConsumedNutrientsEmpty = useSelector(state => state.consumedNutrients.isConsumedNutrientsEmpty);

   return (
      <div className={styles["page-layout"]}>
         <AddNutrientMenu />
         {!isConsumedNutrientsEmpty && <ConsumedNutrientsTable />}
         <TotalStatus />
      </div>
   );
}

export default HomePage;
