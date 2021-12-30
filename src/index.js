import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeFile from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeFile.store}>
      <PersistGate loading={null} persistor={storeFile.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
