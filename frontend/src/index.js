import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './Home';
import Test from './Test'
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Guarantees from './Guarantees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Switch>
        <Route path="/"> */}
    {/* <HomePage /> */}
    {/* <ContactUs></ContactUs> */}
    {/* <FAQ></FAQ> */}
    {/* <Guarantees></Guarantees> */}
    <Test></Test>
    {/* </Route>
      </Switch>
    </Router> */}
  </React.StrictMode>
);
