import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TabMenu } from 'primereact/tabmenu';
import { dataSettingsModalActions } from '../../global/redux/data-settings-modal';
import { pageActions } from '../../global/redux/page';
import styles from './Header.module.css';

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
            dispatch(pageActions.showHomePage());
            break;
         case 1:
            dispatch(pageActions.showNutrientList());
            break;
         default:
            break;
      }

      if (event.index === 2) {
         dispatch(dataSettingsModalActions.show());
      } else {
         dispatch(dataSettingsModalActions.hide());
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
