import React, { useContext } from 'react';
import DatabaseContext from '../../global/context/database-context';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import styles from '../../App.module.css';
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
   const databaseContext = useContext(DatabaseContext);

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
      let { index, newData/*, originalEvent*/ } = event;
      const selectedNutrient = databaseContext.nutrients[index];

      console.log(newData, selectedNutrient);
   }

   return (
      <div className={styles["page-layout"]}>
         <div className={cn("card p-fluid", styles.table)}>
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
                  rowEditor headerStyle={{ width: '8rem', minWidth: '8rem' }}
                  bodyStyle={{ textAlign: 'center' }}
               />
            </DataTable>
         </div>
      </div>
   );
}

export default NutrientList;
