import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DataSettingsForm from './components/DataSettingsForm';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import styles from './DataSettingsModal.module.css';

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
         <DataSettingsForm />
      </Dialog>
   );
}

export default DataSettings;
