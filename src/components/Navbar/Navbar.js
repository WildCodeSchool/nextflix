import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo-nextflick.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: true
    };
  }

  changeNavBar = () => {
    this.setState(prevState => ({ showNavBar: !prevState.showNavBar }));
  };

  render() {
    const { showNavBar } = this.state;

    return (
      <nav
        className={`Navbar ${!showNavBar ? 'Navbar--hidden' : ''}`}
      >
        <button type="button" className="Navbar__button" onClick={this.changeNavBar}>
          <img className="Navbar__logo" alt="Logo de l'application Nextflick" src={logo} />
        </button>
        <div className={`Navbar__list ${showNavBar ? 'Navbar__list--hidden' : ''}`}>
          <NavLink exact to="/" className="Navbar__link" activeClassName="Navbar__link--active">
            Wall
          </NavLink>
          <NavLink exact to="/credits" className="Navbar__link" activeClassName="Navbar__link--active">
            Crédits
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
