import React, { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import {loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IGlVCGKyarQBTn2Wm77VPA0klsKwYKXw1FmQqmagr6Y2R0lb6ikPYjTV5tw5Av3KDdY5jG7Z7UNmZHnRWL8Wyoj00jbuXPVa0"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    //BEM
    <Router>
    <div className="app">
    
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
           <Header />
           <Checkout />
        </Route>
        <Route path="/payment">
           <Header />
           <Elements stripe={promise}>
             <Payment />
           </Elements>
           
           <h1>I am the payment route</h1>
        </Route>
        <Route path="/">
           <Header />
           <Home />
        </Route>
      </Switch>
      
   
    </div>
    </Router>
  );
}

export default App;
