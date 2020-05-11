import React from 'react';
import './style/cmps/App.css';

import {Home} from './pages/Home'
import {About} from './pages/About'
import ToyApp from './pages/ToyApp'
import {ToyEdit} from './pages/ToyEdit'
import ToyDetails from './pages/ToyDetails'


import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' 

function App() {
  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <h1>
            Mister Toy
          </h1>
          <Link to="/home">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/toy">Store</Link>
        </header>
        <Switch>
          <Route component = {Home} path="/home"></Route>
          <Route component = {About} path="/about"></Route>
          <Route exact component = {ToyEdit} path="/toy/edit/:toyId"></Route>
          <Route exact component = {ToyDetails} path="/toy/:toyId"></Route>
          <Route component = {ToyApp} path="/toy"></Route>

        </Switch>
       </Router>
    </div>
  );
}

export default App;
