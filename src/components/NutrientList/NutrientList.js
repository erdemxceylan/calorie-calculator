import React, { useContext } from 'react';
import DatabaseContext from '../../global/context/database-context';
import styles from '../../App.module.css';

function NutrientList() {
   const databaseContext = useContext(DatabaseContext);

   return (
      <div className={styles["page-layout"]}>
         {databaseContext.nutrients.map(nutrient => (
            <div key={nutrient.id}>
               <h2>{nutrient.name}</h2>
               <p>{nutrient.id}</p>
               <p>{nutrient.unit} {nutrient.calories} {nutrient.proteins}</p>
            </div>
         ))}
      </div>
   );
}

export default NutrientList;
