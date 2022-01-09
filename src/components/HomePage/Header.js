import React, { useState } from 'react';
import { TabMenu } from "primereact/tabmenu";
import styles from "./Header.module.css";

function Header() {

   const [activeIndex, setActiveIndex] = useState(0);

   const items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Nutrient List', icon: 'pi pi-fw pi-list' },
      { label: 'Data Settings', icon: 'pi pi-fw pi-cog' }
   ];

   return (
      <TabMenu
         className={styles.header}
         model={items}
         activeIndex={activeIndex}
         onTabChange={(e) => setActiveIndex(e.index)}
      />
   );
}

export default Header;
