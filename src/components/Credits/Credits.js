import React, { Component } from 'react';
import CreditsPlayer from '../CreditsPlayer/CreditsPlayer';
import './Credits.css';


class Credits extends Component {
	state = {
		open: false,
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	}

	render() {
		const { open } = this.state;
		return (
			<div className="Credits">
				<button className={`Credits__close ${!open ? 'Credits__close--hidden' : ''}`} onClick={this.onCloseModal}></button>
				<button type="button" className="Credits__screen" onClick={this.onOpenModal}>
					<img className="Credits__screen-image" src="https://i.imgur.com/rVFuPT4.png" alt="ecran de cinema" />
					<span className="Credits__screen-text">Click me</span>
				</button>
				{open && <CreditsPlayer className="Credits__player" />}
			</div>
		)
	}

}


export default Credits;
