import React from "react";
import {Link} from "react-router-dom";
import "./horizontalNav.css";

export default class HorizontalNav extends React.Component{
    render(){
        return (
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/">SecurePay</Link>
                    <div id="close-sidebar">
                    <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="sidebar-header">
                    <div className="user-pic">

                    
                    </div>
                    <div className="user-info">
                    <span>{this.props.fname}</span>
                    <span className="user-name">{this.props.username}
                    </span>
                    <span>#{this.props.userid}</span>
                    </div>
                </div>                
                
                <div className="sidebar-menu">
                    <ul>
                    <li className="header-menu">
                    
                    </li>
                    <li className="sidebar">
                        <Link to="/dashboard/" className="nav-item-active">
                        <span>Activity</span>
                        </Link>
                        
                    </li>
                    <li className="sidebar">
                        <Link to="/dashboard/wallet">
                        
                        <span>Wallet</span>
                        </Link>
                        <div className="sidebar-submenu">
                        
                        </div>
                    </li>
                    <li className="sidebar">
                        <Link to="/dashboard/settings">
                        
                        <span>Settings</span>
                        </Link>
                        
                    </li>
                    <li className="sidebar">
                        <Link to="/dashboard/signout">
                        
                        <span >Sign Out</span>
                        </Link>
                        
                    </li>

                    <li className="sidebar">
                        <Link to="/dashboard/new">   
                            <span ><button className="btn btn-lg btn-light btn-block" type="submit">+ New</button></span>
                        </Link>
                        
                        </li>  
                    </ul>
                </div>
                </div>    
            </nav>
        )
    }
}