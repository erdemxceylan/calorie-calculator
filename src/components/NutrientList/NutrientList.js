import React from 'react';
import { useSelector } from "react-redux";
import styles from '../../App.module.css';

function NutrientList() {
   const displayNutrientList = useSelector(state => state.pageDisplay.displayNutrientList);

   return (
      <React.Fragment>
         {displayNutrientList &&
            <div className={styles["page-layout"]}>
               <h1>Nutrient List</h1>
            </div>
         }
      </React.Fragment>
   );
}

export default NutrientList;
