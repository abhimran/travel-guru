import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from './components/Booking/Booking';
import Rooms from './components/Rooms/Rooms';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const nameContex = createContext();

function App() {
  const [name, setName] = useState("cox's bazar");
  const [user, setUser] = useState({
    isSignin: false,
    name: '',
    email: '',
    photo: '',
    password: '',
    error: '',
    success: false,
  })
  const handleClick = (cityName) => {
    setName(cityName);
  };
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <nameContex.Provider value={[name, setName, handleClick, loggedInUser, setLoggedInUser, user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/rooms">
              <Rooms></Rooms>
            </PrivateRoute>
            <Route path="/login">
             <Login></Login>
            </Route>
          </Switch>
        </Router>
      </nameContex.Provider>
    </div>
  );
}

export default App;
