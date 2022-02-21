import React from 'react';
import styles from '../../App.module.css';
import nutrients from '../../database/nutrients';

function NutrientList() {
   return (
      <div className={styles["page-layout"]}>
         {nutrients.map(nutrient => (
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
