import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dataSettingsActions } from '../../store/data-settings';
import { pageDisplayActions } from '../../store/page-display';
import { TabMenu } from "primereact/tabmenu";
import styles from "./Header.module.css";

function Header() {

   const [activeIndex, setActiveIndex] = useState(0);
   const dispatch = useDispatch();

   const items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Nutrient List', icon: 'pi pi-fw pi-list' },
      { label: 'Data Settings', icon: 'pi pi-fw pi-cog' }
   ];

   function tabChangeHandler(event) {
      setActiveIndex(event.index);

      switch (event.index) {
         case 0:
            dispatch(pageDisplayActions.displayHomePage());
            break;
         case 1:
            dispatch(pageDisplayActions.displayNutrientList());
            break;
         default:
            break;
      }

      if (event.index === 2) {
         dispatch(dataSettingsActions.show());
      } else {
         dispatch(dataSettingsActions.hide());
      }
   }

   return (
      <TabMenu
         className={styles.header}
         model={items}
         activeIndex={activeIndex}
         onTabChange={tabChangeHandler}
      />
   );
}

export default Header;