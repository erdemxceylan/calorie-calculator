import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/HomePage/Header";
import AddNutrientMenu from "./components/HomePage/AddNutrientMenu";
import ConsumedNutrientsTable from "./components/HomePage/ConsumedNutrientsTable";
import styles from "./App.module.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataSettings from "./components/DataSettings/DataSettings";

function App() {

  const isConsumedNutrientsEmpty = useSelector(state => state.isConsumedNutrientsEmpty);

  return (
    <React.Fragment>
      {/* <Header />
      <div className={styles.main}>
        <AddNutrientMenu />
        {!isConsumedNutrientsEmpty && <ConsumedNutrientsTable />}
      </div> */}
      <DataSettings />
    </React.Fragment>
  );
}

export default App;
