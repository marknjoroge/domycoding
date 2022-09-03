import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './Home';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Guarantees from './Guarantees';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path='/faq' element={<FAQ></FAQ>}></Route>
        <Route path='/guarantees' element={<Guarantees></Guarantees>}></Route>
        <Route path='/howitworks' element={<HowItWorks></HowItWorks>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
