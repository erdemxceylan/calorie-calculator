import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TabMenu } from 'primereact/tabmenu';
import { modalActions } from '../../global/redux/modal';
import { pageActions } from '../../global/redux/page';
import styles from './Header.module.css';
import AuthContext from '../../global/context/auth';

function Header() {
   const [activeIndex, setActiveIndex] = useState(0);
   const dispatch = useDispatch();
   const auth = useContext(AuthContext);

   const loginButton = { label: 'Login', icon: 'pi pi-fw pi-sign-in' };
   const logoutButton = { label: 'Logout', icon: 'pi pi-fw pi-sign-out' };

   const items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Nutrient List', icon: 'pi pi-fw pi-list' },
      { label: 'Data Settings', icon: 'pi pi-fw pi-cog' },
      auth.isLoggedIn ? logoutButton : loginButton
   ];

   function tabChangeHandler(event) {
      setActiveIndex(event.index);

      switch (event.index) {
         case 0:
            dispatch(pageActions.displayHomePage());
            break;
         case 1:
            dispatch(pageActions.displayNutrientList());
            break;
         default:
            break;
      }

      if (event.index === 2) {
         dispatch(modalActions.displayDataSettings());
      } else {
         dispatch(modalActions.hideDataSettings());
      }

      if (event.index === 3) {
         if (auth.isLoggedIn) {
            auth.logout();
         } else {
            dispatch(modalActions.displayLogin());
         }
      } else {
         dispatch(modalActions.hideLogin());
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
