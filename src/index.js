import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

import 'rsuite/dist/rsuite.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
