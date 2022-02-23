import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DataSettingsForm from './components/DataSettingsForm';
import useHttpRequest from '../../hooks/use-http-request';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import styles from './DataSettingsModal.module.css';

function DataSettings() {
   const showDataSettings = useSelector(state => state.dataSettings.showDataSettings);
   const dispatch = useDispatch();
   const { isLoading, error, sendRequest } = useHttpRequest();
   let formData = {};

   function closeHandler() {
      dispatch(dataSettingsModalActions.hide());
   }

   function getInputData(inputData) {
      formData.reset = inputData.resetForm;
      formData.isValid = inputData.isFormValid;
      if (formData.isValid) {
         formData.dailyCalorieNeed = Number(inputData.enteredValues.dailyCalorieNeed);
         formData.weight = Number(inputData.enteredValues.weight);
         formData.fatRatio = Number(inputData.enteredValues.fatRatio);
      }
   }

   function getFitnessGoal(goal) {
      formData.fitnessGoal = goal;
   }

   function submitHandler(event) {
      event.preventDefault();

      if (!formData.isValid) return;

      sendRequest({
         url: 'https://graduation-project-7c908-default-rtdb.europe-west1.firebasedatabase.app/settings.json',
         method: 'PUT',
         body: {
            'uniqueKey': {
               dailyCalorieNeed: formData.dailyCalorieNeed,
               weight: formData.weight,
               fatRatio: formData.fatRatio,
               fitnessGoal: formData.fitnessGoal
            }
         }
      });

      console.log(isLoading);
      console.log(error);

      formData.reset();
   }

   const submitButton = (
      <Button
         label="Submit"
         className="p-button-success"
         onClick={submitHandler}
      />
   );

   return (
      <Dialog
         className={styles.modal}
         header="Data Settings"
         visible={showDataSettings}
         onHide={closeHandler}
         footer={submitButton}
      >
         <DataSettingsForm sendInputData={getInputData} sendFitnessGoal={getFitnessGoal} />
      </Dialog>
   );
}

export default DataSettings;
