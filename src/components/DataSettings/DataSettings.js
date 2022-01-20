import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import cn from "classnames";
import styles from "./DataSettings.module.css";
import Modal from '../UI/Modal';

function DataSettings() {
   const [fitnessGoal, setFitnessGoal] = useState("Weight Gain");

   function submitHandler(event) {
      event.preventDefault();
      console.log("Submitting..");
   }

   return (
      <Modal>
         <form onSubmit={submitHandler} /*className={styles.form}*/>
            <div className={cn("p-fluid", styles.layout)}>
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
                        onChange={(e) => setFitnessGoal(e.value)}
                        checked={fitnessGoal === 'Weight Gain'}
                     />
                     <label htmlFor="weight gain">Weight Gain</label>
                  </div>
                  <div className="p-field-radiobutton">
                     <RadioButton
                        inputId="weight loss"
                        value="Weight Loss"
                        onChange={(e) => setFitnessGoal(e.value)}
                        checked={fitnessGoal === 'Weight Loss'}
                     />
                     <label htmlFor="weight loss">Weight Loss</label>
                  </div>
               </div>
               <Button
                  label="Submit"
                  className='p-button-success'
                  type='submit'
               />
               <Button
                  label="Close"
                  className="p-button-danger"
                  type='button'
               />
            </div>
         </form>
      </Modal>
   )
}

export default DataSettings;
