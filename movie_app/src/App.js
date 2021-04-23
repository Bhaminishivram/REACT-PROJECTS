import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Movies from './components/movie'; 
import Navbar from './components/navbar'; 
import Customer from './components/customer'; 
import Rentals from './components/rentals'; 
import NotFound from './components/notfound'; 
import moviesForm from './components/moviesForm';

function App() {
  return (
    <React.Fragment>
      <Navbar /> 
      <main className="container">
        <Switch>  
          <Route path="/movies/:id" component={moviesForm}/>
          <Route path="/movies" component={Movies}/> 
          <Route path="/customer" component={Customer} /> 
          <Route path="/rentals" component={Rentals}/>  
          <Route path="/notfound" component={NotFound}/>
          <Route path="/" exact component={Movies}/> 
          <Redirect to="/notfound"/>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
