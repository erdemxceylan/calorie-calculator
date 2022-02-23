import React from 'react';
import DataSettingsInputs from './DataSettingsInputs';
import FitnessGoalSelection from './FitnessGoalSelection';
import styles from './DataSettingsForm.module.css';
import cn from 'classnames';

function DataSettingsForm(props) {

   function getInputData(inputData) {
      props.sendInputData(inputData);
   };

   function getFitnessGoal(goal) {
      props.sendFitnessGoal(goal);
   }

   return (
      <div className={cn("p-fluid", styles.form)}>
         <DataSettingsInputs sendInputData={getInputData} />
         <FitnessGoalSelection sendFitnessGoal={getFitnessGoal} />
      </div>
   );
}

export default DataSettingsForm;
