// src/App.jsx
//
// Scope: Create an 'App.jsx' file to define the main React component. This component will render the initial UI of the application, specifically a div with 'Welcome to WorldClock Dashboard'. This is the root component that will be used in the main entry file of the React application.

import React from 'react';
import 'tailwindcss/tailwind.css';
function App() {
  return (
    <div className='font-bold text-xl text-center'>Welcome to WorldClock Dashboard</div>
  );
}
export default App;