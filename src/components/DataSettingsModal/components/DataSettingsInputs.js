import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

function DataSettingsInputs(props) {
   const [enteredDailyCalorieNeed, setEnteredDailyCalorieNeed] = useState('');
   const [enteredWeight, setEnteredWeight] = useState('');
   const [enteredFatRatio, setEnteredFatRatio] = useState('');

   return (
      <React.Fragment>
         <InputText
            type="number"
            min={1}
            max={100000}
            placeholder="Daily Calorie Need (kcal)"
            value={enteredDailyCalorieNeed}
            onChange={e => setEnteredDailyCalorieNeed(e.target.value)}
         />
         <InputText
            type="number"
            min={1}
            max={1000}
            placeholder="Weight (kg)"
            value={enteredWeight}
            onChange={e => setEnteredWeight(e.target.value)}
         />
         <InputText
            type="number"
            min={1}
            max={100}
            placeholder="Fat Ratio (%)"
            value={enteredFatRatio}
            onChange={e => setEnteredFatRatio(e.target.value)}
         />
      </React.Fragment>
   );
}

export default DataSettingsInputs;
