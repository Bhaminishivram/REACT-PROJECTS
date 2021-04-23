import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Movies from './components/movie'; 
import Navbar from './components/navbar'; 
import Customers from './components/customer'; 
import Rentals from './components/rentals';

function App() {
  return (
    <React.Fragment>
      <Navbar /> 
      <main className="container">
        <Switch> 
          <Route path="/movies" component={Movies}/> 
          <Route path="/customers" component={Customers} /> 
          <Route path="/rentals" component={Rentals}/> 
          <Route path="/" component={Movies}/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
