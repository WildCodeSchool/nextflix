import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Wall from './components/Wall';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wall/>
    </div>

  );
}

export default App;
