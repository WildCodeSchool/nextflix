import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Credits from './components/Credits/Credits';
import Wall from './components/Wall/Wall';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Wall} />
        <Route path="/credits" component={Credits} />
      </Switch>
    </div>
  );
}

export default App;
