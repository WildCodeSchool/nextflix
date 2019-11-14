import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Credit2 from '../Credit/Credit2';

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
			<div className="credit">
				<Modal open={ open } onClose={this.onCloseModal} little>
				<Credit2 />
				</Modal>
			</div>	
		)
	}

}


export default ModalPage;