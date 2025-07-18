// src/main.jsx
//
// Scope: Create the entry point for the React application. This file should import React and ReactDOM, and use ReactDOM.render to inject the React app into the HTML. It will import the App component from './App.jsx' and render it within the root div element. This setup is crucial for initializing the React application.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);