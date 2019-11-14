import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import ModalPage from '../ModalPage/ModalPage';
import Wall from '../Wall/Wall';


function Navbar({ show, changeNavBar }) {
  return (
    <div className="navi">
      <nav>
        <div
          className={show ? "nburger-show" : "nburger-hidden"}
          onClick={() => changeNavBar()}
        >
          <img className="nav__picture" alt="nextflic-logo" src="https://i.imgur.com/fAwtw8J.png" />
          <ModalPage />
          <Wall />
          <div className="nav">
            <NavLink exact activeClassName="active" to="/">Wall</NavLink>
            <NavLink activeClassName="active" to="/Crédits">Crédits</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
