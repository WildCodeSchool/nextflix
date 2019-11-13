import React from 'react';
import './Navbar.css';
import ModalPage from '../ModalPage/ModalPage';


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
        </div>        
      </nav>

    </div>
  );
}

export default Navbar;
