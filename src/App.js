import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Wall from './components/Wall/Wall';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Wall} />
        <Route path="/credits" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
