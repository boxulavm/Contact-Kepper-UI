import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

import ContactState from './context/contacts/ContactState'
import './App.css';

const App = () => {


  return (
    <ContactState>
      <Router>
        <Navbar />
        <div className="container pt-5">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
      </ContactState>
  );
}

export default App;
