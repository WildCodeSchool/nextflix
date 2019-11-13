import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Credit from '../Credit/Credit';

class ModalPage extends Component {
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
			<div>
				<h1 className="credit-video" onClick={this.onOpenModal}>Credit</h1>
				<Modal open={ open } onClose={this.onCloseModal} little>
				<Credit />
				</Modal>
			</div>	
		)
	}

}


export default ModalPage;