import React from 'react';
import ReactPlayer from 'react-player';
import './Credit2.css';


function Credit2() {
	return(
		<div className="ecran-movie">
		<ReactPlayer 
		url="https://youtu.be/NZRoZRyEdSY" 
		playing
		width='199px'
        height='123px'
		/>
		</div>
	);
}

export default Credit2;