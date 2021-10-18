import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import _App_ from './src/_App_';
// import createRouter from './routes';


export default function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor="#000" />
          <_App_ />
        </PersistGate>
      </Provider>
    </>
  );
}