import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css'

import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Deafult from './components/Deafult';
import Contact from "./components/Contact";


function App() {
  return (
    <React.Fragment>
     <Router> 
          
          <Switch>
          <Route exact path="/" component={ProductList}/>
              <Route path='/details' component={Details}/>
              <Route path='/cart' component={Cart}/>
              <Route path={"/contact"} component={Contact}/>
              <Route component={Deafult}/>
              

              
              

          </Switch>
    </Router> 

    </React.Fragment>
  );
}

export default App;
