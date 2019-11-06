import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
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
				<Wall/>
			</div>
  		);
	}
}

export default App;
