import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NutrientList from './components/NutrientList/NutrientList';
import DataSettingsModal from './components/DataSettingsModal/DataSettingsModal';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const showHomePage = useSelector(state => state.page.showHomePage);
  const showNutrientList = useSelector(state => state.page.showNutrientList);

  return (
    <React.Fragment>
      <Header />
      {showHomePage && <HomePage />}
      {showNutrientList && <NutrientList />}
      <DataSettingsModal />
    </React.Fragment>
  );
}

export default App;
