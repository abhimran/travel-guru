import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from './components/Booking/Booking';
import Rooms from './components/Rooms/Rooms';

export const nameContex = createContext();

function App() {
  const [name, setName] = useState("cox's bazar");
  const handleClick = (cityName) => {
    setName(cityName);
  };
  return (
    <div className="App">
      <nameContex.Provider value={[name, setName, handleClick]}>
        <Router>
          {/* <Home></Home> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/rooms">
              <Rooms></Rooms>
            </Route>
          </Switch>
        </Router>
      </nameContex.Provider>
    </div>
  );
}

export default App;
