import React from 'react';
import styles from './TotalValues.module.css';
import { useSelector } from 'react-redux';

function TotalValues() {
   const totalCalories = useSelector(state => state.consumedNutrients.totalCalories);
   const totalProteins = useSelector(state => state.consumedNutrients.totalProteins);

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
   )
}

export default TotalValues;
