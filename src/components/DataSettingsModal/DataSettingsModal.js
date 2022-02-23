import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import styles from './DataSettingsModal.module.css';
import cn from 'classnames';

const WEIGHT_GAIN = 'Weight Gain';
const WEIGHT_LOSS = 'Weight Loss';

function DataSettings() {
   const [enteredFitnessGoal, setEnteredFitnessGoal] = useState(WEIGHT_GAIN);
   const showDataSettings = useSelector(state => state.dataSettings.showDataSettings);
   const dispatch = useDispatch();

   function closeHandler() {
      dispatch(dataSettingsModalActions.hide());
   }

   function submitHandler(event) {
      event.preventDefault();
      console.log('Submitting..');
   }

   const submitButton = (
      <Button
         label="Submit"
         className="p-button-success"
         onClick={submitHandler}
      />
   );

   const fitnessGoalRadioButtons = (
      <div className={styles.radio}>
         <h4>Fitness Goal</h4>
         <div className="p-field-radiobutton">
            <RadioButton
               inputId={WEIGHT_GAIN}
               value={WEIGHT_GAIN}
               onChange={(e) => setEnteredFitnessGoal(e.value)}
               checked={enteredFitnessGoal === WEIGHT_GAIN}
            />
            <label htmlFor={WEIGHT_GAIN}>{WEIGHT_GAIN}</label>
         </div>
         <div className="p-field-radiobutton">
            <RadioButton
               inputId={WEIGHT_LOSS}
               value={WEIGHT_LOSS}
               onChange={(e) => setEnteredFitnessGoal(e.value)}
               checked={enteredFitnessGoal === WEIGHT_LOSS}
            />
            <label htmlFor={WEIGHT_LOSS}>{WEIGHT_LOSS}</label>
         </div>
      </div>
   );

   const modalContent = (
      <div className={cn("p-fluid", styles.content)}>
         <InputText
            type="number"
            min={1}
            max={100000}
            placeholder="Daily Calorie Need (kcal)"
         //   value={}
         />
         <InputText
            type="number"
            min={1}
            max={1000}
            placeholder="Weight (kg)"
         //   value={}
         />
         <InputText
            type="number"
            min={1}
            max={100}
            placeholder="Fat Ratio (%)"
         //   value={}
         />
         {fitnessGoalRadioButtons}
      </div>
   );

   return (
      <Dialog
         className={styles.modal}
         header="Data Settings"
         visible={showDataSettings}
         onHide={closeHandler}
         footer={submitButton}
      >
         {modalContent}
      </Dialog>
   );
}

export default DataSettings;
