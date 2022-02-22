import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../App.module.css';

function NutrientList() {
   const [nutrients, setNutrients] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(async () => {
      setIsLoading(true);
      const response = await axios.get('http://localhost:8080/nutrients');
      setNutrients(response.data);
      setIsLoading(false);
   }, []);

   return (
      <div className={styles["page-layout"]}>
         {isLoading && <p>Loading...</p>}
         {!isLoading && nutrients.map(nutrient => (
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
