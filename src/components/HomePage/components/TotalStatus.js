import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TotalStatus() {
   const [dataSettings, setDataSettings] = useState(null);

   useEffect(() => {
      axios.get('http://localhost:8080/settings').then(response => setDataSettings({
         dailyCalorieNeed: response.data['-McGWXQ3rPVsHFY_mt1r'].daily_calorie_need,
         weight: response.data['-McGWXQ3rPVsHFY_mt1r'].weight,
         fatRatio: response.data['-McGWXQ3rPVsHFY_mt1r'].fat_ratio,
         fitnessTarget: response.data['-McGWXQ3rPVsHFY_mt1r'].target
      }));
   }, []);

   return dataSettings ? (
      <React.Fragment>
         <h3>{dataSettings.dailyCalorieNeed}</h3>
         <p>{dataSettings.weight}</p>
         <p>{dataSettings.fatRatio}</p>
         <p>{dataSettings.fitnessTarget}</p>
      </React.Fragment>
   ) : null;
}

export default TotalStatus;
