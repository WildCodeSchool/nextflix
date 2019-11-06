import React from 'react';
import './Navbar.css';


function Navbar({ show, changeNavBar }) {
  return (
    <div className="navi">
      <nav>
        <div 
          className={show ? "nburger-show" : "nburger-hidden"} 
          onClick={() => changeNavBar()}
        >
          <img alt="nextflic-logo" src="../../../images/NETFLIX.png" />
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>My Favorite</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
