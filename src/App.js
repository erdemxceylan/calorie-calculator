import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import AddNutrientMenu from "./components/AddNutrientMenu";
import ConsumedNutrientsTable from "./components/ConsumedNutrientsTable";
import styles from "./App.module.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {

  const isConsumedNutrientsEmpty = useSelector(state => state.isConsumedNutrientsEmpty);

  return (
    <React.Fragment>
      <Header />
      <div className={styles.main}>
        <AddNutrientMenu />
        {!isConsumedNutrientsEmpty && <ConsumedNutrientsTable />}
      </div>
    </React.Fragment>
  );
}

export default App;
