import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { consumedNutrientsActions } from '../../../global/redux/consumed-nutrients';
import DatabaseContext from '../../../global/context/database-context';
import styles from './AddNutrientMenu.module.css';
import cn from 'classnames';

function AddNutrientMenu() {
   const databaseContext = useContext(DatabaseContext);
   const [selectedNutrient, setSelectedNutrient] = useState(null);
   const [consumedQuantity, setConsumedQuantity] = useState('');

   const dispatch = useDispatch();

   function submitHandler(event) {
      event.preventDefault();

      if (selectedNutrient && Number(consumedQuantity) > 0) {
         const consumedNutrient = {
            id: selectedNutrient.id,
            name: selectedNutrient.name,
            unit: selectedNutrient.unit,
            consumedQuantity,
            caloriesTaken: selectedNutrient.calories * +consumedQuantity,
            proteinsTaken: selectedNutrient.proteins * +consumedQuantity
         };

         dispatch(consumedNutrientsActions.addConsumedNutrient(consumedNutrient));

         setSelectedNutrient(null);
         setConsumedQuantity('');
      }
   }

   return (
      <form onSubmit={submitHandler} className={styles.form}>
         <Dropdown
            className={styles.dropdown}
            value={selectedNutrient}
            options={databaseContext.nutrients}
            onChange={e => setSelectedNutrient(e.target.value)}
            optionLabel="name"
            filter showClear filterBy="name"
            placeholder="Select a Nutrient"
         />
         <span className={cn("p-float-label", styles.span)} >
            <InputText
               id="inputnumber"
               type="number"
               min={1}
               value={consumedQuantity}
               onChange={e => setConsumedQuantity(e.target.value)}
            />
            <label htmlFor="inputnumber">
               {selectedNutrient ? selectedNutrient.unit : 'quantity'}
            </label>
         </span>
         <Button label="Add" className={cn("p-button-success", styles.button)} type="submit" />
      </form>
   );
};

export default AddNutrientMenu;
