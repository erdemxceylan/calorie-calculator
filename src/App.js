import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NutrientList from './components/NutrientList/NutrientList';
import DataSettings from './components/DataSettings/DataSettings';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const displayHomePage = useSelector(state => state.pageDisplay.displayHomePage);
  const displayNutrientList = useSelector(state => state.pageDisplay.displayNutrientList);

  return (
    <React.Fragment>
      <Header />
      {displayHomePage && <HomePage />}
      {displayNutrientList && <NutrientList />}
      <DataSettings />
    </React.Fragment>
  );
}

export default App;
