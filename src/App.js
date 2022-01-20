import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import AddNutrientMenu from "./components/HomePage/AddNutrientMenu";
import ConsumedNutrientsTable from "./components/HomePage/ConsumedNutrientsTable";
import styles from "./App.module.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DataSettings from "./components/DataSettings/DataSettings";

function App() {

  const isConsumedNutrientsEmpty = useSelector(state => state.consumedNutrients.isConsumedNutrientsEmpty);
  const displayHomePage = useSelector(state => state.pageDisplay.displayHomePage);
  const displayNutrientList = useSelector(state => state.pageDisplay.displayNutrientList);

  return (
    <React.Fragment>
      <Header />
      {displayHomePage &&
        <div className={styles.home}>
          <AddNutrientMenu />
          {!isConsumedNutrientsEmpty && <ConsumedNutrientsTable />}
        </div>
      }
      {displayNutrientList &&
        <div className={styles.list}>
          <h1>Nutrient List</h1>
        </div>
      }
      <DataSettings />
    </React.Fragment>
  );
}

export default App;
