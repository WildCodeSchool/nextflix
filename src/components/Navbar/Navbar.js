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
          <img alt="nextflic-logo" src="https://i.imgur.com/fAwtw8J.png" />
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>My Favorite</li>
            <li><a href="https://i.imgur.com/RDj51x8.mp4"></a>Credit</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
