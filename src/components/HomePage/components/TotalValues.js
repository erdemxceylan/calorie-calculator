import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import DatabaseContext from '../../../global/context/database-context';
import styles from './TotalValues.module.css';

function TotalValues() {
   const totalCalories = useSelector(state => state.consumedNutrients.totalCalories).toFixed(2);
   const totalProteins = useSelector(state => state.consumedNutrients.totalProteins).toFixed(2);
   const databaseContext = useContext(DatabaseContext);
   const calorieStatus = `${totalCalories} /
                          ${databaseContext.dailyTargetValues.dailyCalorieTargetLowerBound} -
                          ${databaseContext.dailyTargetValues.dailyCalorieTargetUpperBound} kcal`;
   const proteinStatus = `${totalProteins} / ${databaseContext.dailyTargetValues.dailyProteinNeed} gram`;

   return (
      <React.Fragment>
         <div className={styles.mobile}>
            <div>
               <h3>Calories: </h3>
               <p>{calorieStatus}</p>
            </div>
            <div>
               <h3>Proteins: </h3>
               <p>{proteinStatus}</p>
            </div>
         </div>
         <div className={styles.desktop}>
            <div className={styles.group}>
               <h3>Calories: </h3>
               <p>{calorieStatus}</p>
            </div>
            <div className={styles.group}>
               <h3>Proteins: </h3>
               <p>{proteinStatus}</p>
            </div>
         </div>
      </React.Fragment>
   );
}

export default TotalValues;
