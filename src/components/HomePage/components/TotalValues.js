import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './TotalValues.module.css';

function TotalValues() {
   const [dailyTargetValues, setDailyTargetValues] = useState({});
   const totalCalories = useSelector(state => state.consumedNutrients.totalCalories).toFixed(2);
   const totalProteins = useSelector(state => state.consumedNutrients.totalProteins).toFixed(2);
   const calorieStatus = `${totalCalories} /
                          ${dailyTargetValues.dailyCalorieTargetLowerBound} -
                          ${dailyTargetValues.dailyCalorieTargetUpperBound} kcal`;
   const proteinStatus = `${totalProteins} / ${dailyTargetValues.dailyProteinNeed} gram`;

   useEffect(async () => {
      await axios.get('http://localhost:8080/settings')
         .then(response => setDailyTargetValues(response.data));
   }, []);

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
