import React, {Component} from "react";
import './Navbar.scss';
import logo from '../images/refug.svg';
  
class navbar extends Component {
    
    render() {
        return (
            <div className="wrapper">
                <div className="menu_left">
                    <img src={logo} height="200" alt="Save a dog"></img>
                    <div className="t1 white">HOME FOR A FRIEND</div>
                <div className="menu_position">
	                <a href="/albergue" className="menu white">Home</a>         
	                <a href="/historias" className="menu white">About</a>
                    <a href="/blog" className="menu white">Form</a>
                    <a href="/contacto" className="menu white">Contact Us</a>
	
                </div>
                </div>

            </div>  
        );
    }
}

export default navbar;