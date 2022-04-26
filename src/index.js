import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { DatabaseContextProvider } from './global/context/database';
import { AuthContextProvider } from './global/context/auth';
import store from './global/redux/store';

ReactDOM.render(
   <Provider store={store}>
      <DatabaseContextProvider>
         <AuthContextProvider>
            <App />
         </AuthContextProvider>
      </DatabaseContextProvider>
   </Provider>
   , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
