import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch } from "react-redux";
import { consumedNutrientsActions } from '../../store/consumed-nutrients';
import styles from "./AddNutrientMenu.module.css";
import cn from 'classnames';

const DEFAULT_NUTRIENTS = [
   { id: Math.random(), name: 'Kremalı Mantar Çorbası', calories: 10, proteins: 1 },
   { id: Math.random(), name: 'Yeşil Mercimek', calories: 20, proteins: 2 },
   { id: Math.random(), name: 'Hindi Sote', calories: 30, proteins: 3 },
   { id: Math.random(), name: 'Pirinç Pilavı', calories: 40, proteins: 4 }
];

function AddNutrientMenu() {

   const dispatch = useDispatch();

   const [selectedNutrient, setSelectedNutrient] = useState(null);
   const [consumedQuantity, setConsumedQuantity] = useState("");

   const onNutrientChange = (e) => {
      setSelectedNutrient(e.value);
   }

   // const selectedNutrientTemplate = (option, props) => {
   //    if (option) {
   //       return (
   //          <div className="country-item country-item-value">
   //             <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
   //             <div>{option.name}</div>
   //          </div>
   //       );
   //    }

   //    return (
   //       <span>
   //          {props.placeholder}
   //       </span>
   //    );
   // }

   // const nutrientOptionTemplate = (option) => {
   //    return (
   //       <div className="country-item">
   //          <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
   //          <div>{option.name}</div>
   //       </div>
   //    );
   // }

   function submitHandler(event) {
      event.preventDefault();

      if (selectedNutrient === null || +consumedQuantity < 1) {
         return;
      }

      const consumedNutrient = {
         id: selectedNutrient.id,
         name: selectedNutrient.name,
         consumedQuantity,
         caloriesTaken: selectedNutrient.calories * +consumedQuantity,
         proteinsTaken: selectedNutrient.proteins * +consumedQuantity
      };

      dispatch(consumedNutrientsActions.addConsumedNutrient(consumedNutrient));

      setSelectedNutrient(null);
      setConsumedQuantity("");
   }

   return (
      <form onSubmit={submitHandler} className={styles.form}>
         <Dropdown
            className={styles.dropdown}
            value={selectedNutrient}
            options={DEFAULT_NUTRIENTS}
            onChange={onNutrientChange}
            optionLabel="name"
            filter showClear filterBy="name"
            placeholder="Select a Nutrient"
         // valueTemplate={selectedNutrientTemplate}
         // itemTemplate={nutrientOptionTemplate}
         />
         <InputText
            className={styles.input}
            value={consumedQuantity}
            type="number"
            min={1}
            placeholder="birim"
            onChange={(e) => setConsumedQuantity(e.target.value)}
         />
         <Button label="Add" className={cn('p-button-success', styles.button)} type='submit' />
      </form>
   )
};

export default AddNutrientMenu;
