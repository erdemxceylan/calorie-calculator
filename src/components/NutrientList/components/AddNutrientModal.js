import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import AddNutrientModalInputs from './AddNutrientModalInputs';
import mainStyles from '../../../App.module.css';
import styles from './AddNutrientModal.module.css';
import cn from 'classnames';

function AddNutrientModal(props) {

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

      console.log(formData);

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
