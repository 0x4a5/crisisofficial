import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

/* Crisis Routing Block */

import ServicesPage from './routes/ServicesPage';
import InvestorsPage from './routes/InvestorsPage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import ErrorPage from './routes/ErrorPage';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
        {/* Crisis Routing Block */}
      <Route path='*' element={<ErrorPage />} />
      <Route path='/' element={<App />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/investors' element={<InvestorsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      



    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
