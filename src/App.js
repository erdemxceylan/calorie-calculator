import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import NutrientList from './components/NutrientList/NutrientList';
import DataSettingsModal from './components/DataSettingsModal/DataSettingsModal';
import LoginModal from './components/LoginModal/LoginModal';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const displayHomePage = useSelector(state => state.page.displayHomePage);
  const displayNutrientList = useSelector(state => state.page.displayNutrientList);

  return (
    <React.Fragment>
      <Header />
      {displayHomePage && <HomePage />}
      {displayNutrientList && <NutrientList />}
      <DataSettingsModal />
      <LoginModal />
    </React.Fragment>
  );
}

export default App;
