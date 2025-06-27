// src/App.jsx
//
// Scope: Define the App component, which is the root component of the React application. Initially, it should return a simple div element with the text 'Welcome to WorldClock Dashboard' as specified in the test case. This setup will later be expanded to include more complex UI elements, serving as the foundational UI component.

import React from 'react';
import './App.css';
function App() {
  return (
    <div className='app-container'>
      Welcome to WorldClock Dashboard
    </div>
  );
}
export default App;