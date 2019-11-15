import React from 'react';
import ReactPlayer from 'react-player';
import './CreditsPlayer.css';


function CreditsPlayer({ className = '' }) {
  return (
    <div className={`CreditsPlayer ${className}`}>
      <ReactPlayer
        url="https://youtu.be/NZRoZRyEdSY"
        playing
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default CreditsPlayer;
