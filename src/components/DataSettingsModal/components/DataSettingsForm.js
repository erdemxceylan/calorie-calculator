import React from 'react';
import DataSettingsInputs from './DataSettingsInputs';
import FitnessGoalSelection from './FitnessGoalSelection';
import styles from './DataSettingsForm.module.css';
import cn from 'classnames';

function DataSettingsForm() {
   return (
      <div className={cn("p-fluid", styles.form)}>
         <DataSettingsInputs />
         <FitnessGoalSelection />
      </div>
   );
}

export default DataSettingsForm;
