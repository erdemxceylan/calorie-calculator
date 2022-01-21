import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import TotalValues from './TotalValues';
import { consumedNutrientsActions } from '../../../store/consumed-nutrients';
import styles from './ConsumedNutrientsTable.module.css';
import cn from 'classnames';

function ConsumedNutrientsTable() {

   const consumedNutrients = useSelector(state => state.consumedNutrients.consumedNutrients);
   const dispatch = useDispatch();

   const consumedNutrientsTableColumns = [
      { field: "name", header: "Name" },
      { field: "consumedQuantity", header: "Quantity" },
      { field: "caloriesTaken", header: "Calories" },
      { field: "proteinsTaken", header: "Proteins" }
   ];

   function labelField(rowData, field) {
      switch (field) {
         case "caloriesTaken":
            return rowData.caloriesTaken + " kcal";
         case "proteinsTaken":
            return rowData.proteinsTaken + " gram";
         case "consumedQuantity":
            return rowData.consumedQuantity + " birim";
         case "name":
            return rowData.name;
         default:
            return;
      }
   }

   function textEditor(options) {
      return <InputText
         className={styles.input}
         type="number"
         min={0}
         value={options.value}
         onChange={(e) => options.editorCallback(e.target.value)}
      />;
   }

   function cellEditCompletionHandler(event) {
      let { rowData, newValue, originalEvent } = event;

      if (newValue === rowData.consumedQuantity) {
         return;
      } else if (Number(newValue) > 0) {
         const updatedNutrient = {
            id: rowData.id,
            name: rowData.name,
            consumedQuantity: newValue,
            caloriesTaken: rowData.caloriesTaken * +newValue / +rowData.consumedQuantity,
            proteinsTaken: rowData.proteinsTaken * +newValue / +rowData.consumedQuantity
         };
         dispatch(consumedNutrientsActions.updateConsumedNutrient(updatedNutrient));
      } else if (Number(newValue) === 0) {
         const eraseData = {
            id: rowData.id,
            calories: rowData.caloriesTaken,
            proteins: rowData.proteinsTaken
         }
         dispatch(consumedNutrientsActions.deleteConsumedNutrient(eraseData));
      } else {
         originalEvent.preventDefault();
      }
   }

   return (
      <div className={cn("card p-fluid", styles.table)}>
         <DataTable
            value={consumedNutrients}
            className="editable-cells-table"
            editMode="cell"
            responsiveLayout="scroll"
            footer={<TotalValues />}
         >
            {consumedNutrientsTableColumns.map(({ field, header }) => {
               if (field === "consumedQuantity") {
                  return <Column
                     key={field}
                     field={field}
                     header={header}
                     body={rowData => labelField(rowData, field)}
                     editor={options => textEditor(options)}
                     onCellEditComplete={cellEditCompletionHandler}
                  />
               } else {
                  return <Column
                     key={field}
                     field={field}
                     header={header}
                     body={rowData => labelField(rowData, field)}
                  />
               }
            })}
         </DataTable>
      </div>
   )
}

export default ConsumedNutrientsTable;
