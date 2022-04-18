import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DataSettingsModalForm from './components/DataSettingsModalForm';
import useHttpRequest from '../../hooks/use-http-request';
import { modalActions } from '../../global/redux/modal';
import DatabaseContext from '../../global/context/database-context';
import mainStyles from '../../App.module.css';

function DataSettings() {
   const showDataSettings = useSelector(state => state.modal.showDataSettings);
   const dispatch = useDispatch();
   const databaseContext = useContext(DatabaseContext);
   const { error, sendRequest } = useHttpRequest();
   let formData = {};

   function closeHandler() {
      dispatch(modalActions.hideDataSettings());
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

   function submitHandler() {

      if (!formData.isValid) return;

      sendRequest({
         url: 'http://localhost:8080/update-settings',
         method: 'PUT',
         body: {
            dailyCalorieNeed: formData.dailyCalorieNeed,
            weight: formData.weight,
            fatRatio: formData.fatRatio,
            fitnessGoal: formData.fitnessGoal
         }
      }, databaseContext.updateDailyTargetValues);

      if (error) console.log(error);

      formData.reset();
      closeHandler();
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
         className={mainStyles.modal}
         header="Data Settings"
         visible={showDataSettings}
         onHide={closeHandler}
         footer={submitButton}
      >
         <DataSettingsModalForm sendInputData={getInputData} sendFitnessGoal={getFitnessGoal} />
      </Dialog>
   );
}

export default DataSettings;
