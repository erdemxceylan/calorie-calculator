import React from 'react'
import { useSelector } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import TotalValues from './TotalValues';
import styles from "./ConsumedNutrientsTable.module.css";
import cn from 'classnames';

function ConsumedNutrientsTable() {

   const consumedNutrients = useSelector(state => state.consumedNutrients);

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

   function onCellEditComplete(event) {
      let { rowData, newValue, field, originalEvent } = event;

      if (newValue === rowData.consumedQuantity) {
         return;
      } else if (newValue > 0) {

      }
      console.log(rowData, newValue, field, originalEvent);
   }

   return (
      <React.Fragment>
         <div className={styles.mobile}>
            <TotalValues />
         </div>
         <div className={styles.desktop}>
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
                           onCellEditComplete={onCellEditComplete}
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
         </div>
      </React.Fragment>
   )
}

export default ConsumedNutrientsTable;
