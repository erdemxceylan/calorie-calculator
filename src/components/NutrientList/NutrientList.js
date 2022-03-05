import React, { useContext, useState } from 'react';
import useHttpRequest from '../../hooks/use-http-request';
import DatabaseContext from '../../global/context/database-context';
import AddNutrientModal from './components/AddNutrientModal';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import mainStyles from '../../App.module.css';
import styles from './NutrientList.module.css';
import cn from 'classnames';

const NAME = 'Name';
const UNIT = 'Unit';
const CALORIES = 'Calories';
const PROTEINS = 'Proteins';
const NAME_FIELD = 'name';
const UNIT_FIELD = 'unit';
const CALORIES_FIELD = 'calories';
const PROTEINS_FIELD = 'proteins';

function NutrientList() {
   const [showAddNutrientModal, setShowAddNutrientModal] = useState(false);
   const databaseContext = useContext(DatabaseContext);
   const { sendRequest: sendUpdateRequest } = useHttpRequest();
   const { sendRequest: sendDeleteRequest } = useHttpRequest();

   const nutrientListTableColumns = [
      { field: NAME_FIELD, header: NAME },
      { field: UNIT_FIELD, header: UNIT },
      { field: CALORIES_FIELD, header: CALORIES },
      { field: PROTEINS_FIELD, header: PROTEINS }
   ];

   function editor(options, field) {
      if ([CALORIES_FIELD, PROTEINS_FIELD].includes(field)) {
         return <InputText
            className={styles.input}
            type="number"
            min={0}
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
         />;
      }
      return <InputText
         className={styles.input}
         value={options.value}
         onChange={(e) => options.editorCallback(e.target.value)}
      />;
   }

   function labelField(rowData, field) {
      switch (field) {
         case NAME_FIELD:
            return rowData.name;
         case UNIT_FIELD:
            return `1 ${rowData.unit}`;
         case CALORIES_FIELD:
            return rowData.calories + ' kcal';
         case PROTEINS_FIELD:
            return rowData.proteins + ' gram';
         default:
            return;
      }
   }

   function rowEditCompletionHandler(event) {
      let { newData: updatedNutrient } = event;

      sendUpdateRequest({
         url: 'http://localhost:8080/update-nutrient',
         method: 'PUT',
         body: {
            id: updatedNutrient.id,
            name: updatedNutrient.name,
            calories: Number(updatedNutrient.calories),
            proteins: Number(updatedNutrient.proteins),
            unit: updatedNutrient.unit,
         }
      }, databaseContext.updateNutrients);
   }

   function deletionButton(rowData) {
      return (
         <Button
            icon="pi pi-trash"
            className={styles["deletion-button"]}
            onClick={deletionHandler.bind(null, rowData.id)}
         />
      );
   }

   function deletionHandler(selectedNutrientId) {
      console.log(selectedNutrientId);
      sendDeleteRequest({
         url: 'http://localhost:8080/delete-nutrient',
         method: 'DELETE',
         body: { id: selectedNutrientId }
      }, databaseContext.updateNutrients);
   }

   return (
      <div className={mainStyles["page-layout"]}>
         <Button
            className={cn("p-button-success", styles.button)}
            label="Add New Nutrient"
            icon="pi pi-plus"
            onClick={setShowAddNutrientModal.bind(null, true)}
         />
         <div className={cn("card p-fluid", mainStyles.table)}>
            <DataTable
               value={databaseContext.nutrients}
               editMode="row"
               onRowEditComplete={rowEditCompletionHandler}
               responsiveLayout="scroll"
            >
               {nutrientListTableColumns.map(({ field, header }) => {
                  return <Column
                     key={field}
                     field={field}
                     header={header}
                     body={rowData => labelField(rowData, field)}
                     editor={options => editor(options, field)}
                  />;
               })}
               <Column
                  header="Edit"
                  rowEditor headerStyle={{ width: '8rem', minWidth: '8rem' }}
                  bodyStyle={{ textAlign: 'center' }}
               />
               <Column
                  header="Delete"
                  bodyStyle={{ textAlign: 'center' }}
                  body={rowData => deletionButton(rowData)}
               />
            </DataTable>
         </div>
         <AddNutrientModal
            showModal={showAddNutrientModal}
            onHide={setShowAddNutrientModal.bind(null, false)}
         />
      </div>
   );
}

export default NutrientList;
