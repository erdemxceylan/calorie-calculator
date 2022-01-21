import React from 'react';
import { useSelector } from "react-redux";
import AddNutrientMenu from './components/AddNutrientMenu';
import ConsumedNutrientsTable from './components/ConsumedNutrientsTable';
import styles from '../../App.module.css';

function HomePage() {
   const isConsumedNutrientsEmpty = useSelector(state => state.consumedNutrients.isConsumedNutrientsEmpty);
   const displayHomePage = useSelector(state => state.pageDisplay.displayHomePage);

   return (
      <React.Fragment>
         {displayHomePage &&
            <div className={styles["page-layout"]}>
               <AddNutrientMenu />
               {!isConsumedNutrientsEmpty && <ConsumedNutrientsTable />}
            </div>
         }
      </React.Fragment>
   );
}

export default HomePage;
