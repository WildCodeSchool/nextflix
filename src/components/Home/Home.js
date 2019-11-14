import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Credit2 from '../Credit/Credit2';
import './Home.css';


class Home extends Component {
	state= {
		open: false,
	};

	onOpenModal = () => {
		this.setState({open: true});
	};

	onCloseModal = () => {
		this.setState({open: false});
	}

	render() {
		const { open } = this.state;
		return(
			<div className="home">
				<img className="home-video" src="https://i.imgur.com/IvYNfQW.jpg" alt="salle de cinema"/>
				<img  className="ecran-video" onClick={this.onOpenModal} src="https://i.imgur.com/rVFuPT4.png" alt="ecran de cinema"/>
				<span>Click me</span>
				<Modal open={ open } onClose={this.onCloseModal} little>
				<Credit2  className="movie2"/>
				</Modal>
			</div>	
		)
	}

}


export default Home;
