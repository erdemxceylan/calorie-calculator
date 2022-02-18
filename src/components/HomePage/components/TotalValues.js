import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TotalValues.module.css';

function TotalValues() {
   const totalCalories = useSelector(state => state.consumedNutrients.totalCalories).toFixed(2);
   const totalProteins = useSelector(state => state.consumedNutrients.totalProteins).toFixed(2);

   return (
      <React.Fragment>
         <div className={styles.mobile}>
            <div>
               <h3>Total Calories</h3>
               <p>{totalCalories} kcal</p>
            </div>
            <div>
               <h3>Total Proteins</h3>
               <p>{totalProteins} gram</p>
            </div>
         </div>
         <div className={styles.desktop}>
            <div className={styles.group}>
               <h3>Total Calories:</h3>
               <p>{totalCalories} kcal</p>
            </div>
            <div className={styles.group}>
               <h3>Total Proteins:</h3>
               <p>{totalProteins} gram</p>
            </div>
         </div>
      </React.Fragment>
   );
}

export default TotalValues;
