import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TotalStatus() {
   const [dailyTargetValues, setDailyTargetValues] = useState(null);

   useEffect(() => {
      axios.get('http://localhost:8080/settings')
         .then(response => setDailyTargetValues(response.data));
   }, []);

   return dailyTargetValues ? (
      <React.Fragment>
         <p>{dailyTargetValues.dailyCalorieTargetUpperBound}</p>
         <p>{dailyTargetValues.dailyCalorieTargetLowerBound}</p>
         <p>{dailyTargetValues.dailyProteinNeed}</p>
      </React.Fragment>
   ) : null;
}

export default TotalStatus;
