import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./Header";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Loginpage from './Loginpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout></Checkout>
        </Route>
        <Route path="/Login">
          <Loginpage>
            
          </Loginpage>
          </Route>
        <Route path="/">
          <Header />
          <Home></Home>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
