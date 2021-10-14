import React from 'react';
import { StatusBar } from 'react-native';
// import Initial from './routes';
import createRouter from './routes';


export default function App() {

  const signed = false;
  const Routes = createRouter(signed);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <Routes />
    </>
  );
}