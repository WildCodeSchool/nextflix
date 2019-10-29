import React ,{Component}from 'react';
import './Navbar.css';

class Navbar extends Component {
	render(){
	    return (
            <div className ='navi'>
              <nav>
              <div className = {this.props.show ? "nburger-show" : "nburger-hidden"} onClick={() => this.props.changeNavBar()}>
              	<img alt='nextflic-logo' src='../../../images/NETFLIX.png' />
                 <ul>
                  <li>Movies</li>
                  <li>Series</li>
                  <li>My Favorite</li>
                </ul>
              </div>
            
              
              </nav>
          </div>
        )
     }   
}

export default Navbar;