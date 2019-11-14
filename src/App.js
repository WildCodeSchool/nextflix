import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ModalPage from './components/ModalPage/ModalPage';
import Home from './components/Home/Home';
import Wall from './components/Wall/Wall';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showNavBar: false
    }
  }
  changeNavBar = () => {
    this.setState({ showNavBar: !this.state.showNavBar })
  }
  render(){
    return (
      <div className="App">
        <Navbar show={this.state.showNavBar} changeNavBar={this.changeNavBar}/>
        <Switch>
          <Route exact path="/" component={Wall}/>
          <Route exact path="/Crédits" component={Home}/>
        </Switch>                
      </div>
      );
  }
}

export default App;
