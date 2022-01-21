import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import NutrientList from "./components/NutrientList/NutrientList";
import DataSettings from "./components/DataSettings/DataSettings";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <NutrientList />
      <DataSettings />
    </React.Fragment>
  );
}

export default App;
