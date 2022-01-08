import React from 'react'
import { useSelector } from "react-redux";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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
         default:
            return rowData.name;
      }
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
                     return <Column
                        key={field}
                        field={field}
                        header={header}
                        // style={{ width: '25%' }}
                        body={rowData => labelField(rowData, field)}
                     // editor={(options) => cellEditor(options)}
                     // onCellEditComplete={onCellEditComplete}
                     />
                  })}
               </DataTable>
            </div>
         </div>
      </React.Fragment>
   )
}

export default ConsumedNutrientsTable;
