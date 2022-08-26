import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './components/Home';
import Test from './components/Test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Switch>
        <Route path="/"> */}
    <HomePage />
    {/* <Test></Test> */}
    {/* </Route>
      </Switch>
    </Router> */}
  </React.StrictMode>
);
