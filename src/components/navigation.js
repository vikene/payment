import React from "react";
import "./navigation.css";
import {Link} from "react-router-dom";

class Navigation extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-dark navbar-expand-sm  fixed-top navbarcolor" >
                <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>  
                </button>
                
                <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link className="nav-link" to="/"> <span className="fa fa-home fa-lg"></span> Home</Link> </li>
                    <li className="nav-item"><Link className="nav-link" to="/about"><span className="fa fa-info fa-lg"></span> About </Link> </li>
                    
                </ul>
                <span className="navbar-text">
                    <Link to="/signup" className="btn btn-light btn-sm active" role="button" aria-pressed="true">Sign Up</Link>
                <Link to="/signin" className="btn btn-light btn-sm active" role="button" aria-pressed="true">Sign In</Link>
                
                    </span>
                </div>
                </div>


            </nav>
        )
    }
}

export default Navigation;