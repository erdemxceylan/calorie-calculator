import React, { useContext } from 'react';
import useHttpRequest from '../../../hooks/use-http-request';
import DatabaseContext from '../../../global/context/database-context';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import AddNutrientModalInputs from './AddNutrientModalInputs';
import mainStyles from '../../../App.module.css';
import styles from './AddNutrientModal.module.css';
import cn from 'classnames';

function AddNutrientModal(props) {
   const { sendRequest: addNutrientRequest } = useHttpRequest();
   const databaseContext = useContext(DatabaseContext);
   let formData = {};

   function getInputData(inputData) {
      formData.name = inputData.enteredValues.nutrientName;
      formData.unit = inputData.enteredValues.unit;
      formData.calories = Number(inputData.enteredValues.calories);
      formData.proteins = Number(inputData.enteredValues.proteins);
      formData.isValid = inputData.isFormValid;
      formData.reset = inputData.resetForm;
   }

   function submitHandler() {

      if (!formData.isValid) return;

      addNutrientRequest({
         url: 'http://localhost:8080/add-nutrient',
         method: 'POST',
         body: {
            name: formData.name,
            unit: formData.unit,
            calories: formData.calories,
            proteins: formData.proteins
         }
      }, databaseContext.updateNutrients);

      formData.reset();
      props.onHide();
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
         header="Add New Nutrient"
         visible={props.showModal}
         onHide={props.onHide}
         footer={submitButton}
      >
         <div className={cn("p-fluid", styles.form)}>
            <AddNutrientModalInputs sendInputData={getInputData} />
         </div>
      </Dialog>
   );
}

export default AddNutrientModal;