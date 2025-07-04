// src/index.jsx
//
// Scope: Create an 'index.jsx' file as the entry point for the React application. This file should set up the React rendering process, including the root component and Vite's hot module replacement if necessary.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
if (import.meta.hot) {
  import.meta.hot.accept();
}
reportWebVitals();