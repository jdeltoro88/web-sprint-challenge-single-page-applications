import React from "react";
import PizzaHome from "./components/PizzaHome";
import PizzaForm from './components/PizzaHome';
import { Route } from 'react-router-dom';
 
const App = () => {
  return (
    <>
      <Route exact path = '/'>
        <PizzaHome/>
      </Route>
      <Route path = '/pizza'>
        <PizzaForm/>
      </Route>
      </>
  );
};
export default App;
