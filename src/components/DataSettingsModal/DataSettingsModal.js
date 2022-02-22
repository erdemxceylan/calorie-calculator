import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import styles from './DataSettingsModal.module.css';
import cn from 'classnames';

function DataSettings() {
   const [enteredFitnessGoal, setEnteredFitnessTarget] = useState('Weight Gain');
   const showDataSettings = useSelector(state => state.dataSettings.showDataSettings);
   const dispatch = useDispatch();

   const submitButton = (
      <Button
         label="Submit"
         className="p-button-success"
         onClick={submitHandler}
      />
   );

   function submitHandler(event) {
      event.preventDefault();
      console.log('Submitting..');
   }

   function closeHandler() {
      dispatch(dataSettingsModalActions.hide());
   }

   return (
      <Dialog
         className={styles.modal}
         header="Data Settings"
         visible={showDataSettings}
         onHide={closeHandler}
         footer={submitButton}
      >
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
            <div className={styles.radio}>
               <h4>Fitness Goal</h4>
               <div className="p-field-radiobutton">
                  <RadioButton
                     inputId="weight gain"
                     value="Weight Gain"
                     onChange={(e) => setEnteredFitnessTarget(e.value)}
                     checked={enteredFitnessGoal === "Weight Gain"}
                  />
                  <label htmlFor="weight gain">Weight Gain</label>
               </div>
               <div className="p-field-radiobutton">
                  <RadioButton
                     inputId="weight loss"
                     value="Weight Loss"
                     onChange={(e) => setEnteredFitnessTarget(e.value)}
                     checked={enteredFitnessGoal === "Weight Loss"}
                  />
                  <label htmlFor="weight loss">Weight Loss</label>
               </div>
            </div>
         </div>
      </Dialog>
   );
}

export default DataSettings;
