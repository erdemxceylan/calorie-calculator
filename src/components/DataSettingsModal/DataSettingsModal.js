import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DataSettingsInputs from './components/DataSettingsInputs';
import FitnessGoalSelection from './components/FitnessGoalSelection';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import styles from './DataSettingsModal.module.css';
import cn from 'classnames';

function DataSettings() {
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

   return (
      <Dialog
         className={styles.modal}
         header="Data Settings"
         visible={showDataSettings}
         onHide={closeHandler}
         footer={submitButton}
      >
         <div className={cn("p-fluid", styles.content)}>
            <DataSettingsInputs />
            <FitnessGoalSelection />
         </div>
      </Dialog>
   );
}

export default DataSettings;
