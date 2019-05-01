import React from "react";
import {Link} from "react-router-dom";
import "./horizontalNav.css";
import Image from "./image/image";
import logo from './image/logo.png';

export default class HorizontalNav extends React.Component{
    render(){
        return (
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/dashboard/"><img src={logo} height="70px" className="img-logo"/></Link>
                    <div id="close-sidebar">
                    <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="sidebar-header">

                    <div className="user-info">
                    <span></span>
                    <span className="user-name">{this.props.username}
                    </span>
                    <span></span>
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
                            <span ><button className="btn btn-lg btn-success btn-block" type="submit">+ New</button></span>
                        </Link>

                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
