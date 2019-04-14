import React from "react";
import Navigation from "../navigation";
import "./signin.css";

export default class Signin extends React.Component{
    render(){
        return (
            <div>
                <Navigation />
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className = "h3 mb-3 font-weight-normal">Sign In</h1>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <a className="btn btn-large btn-primary" href="dash.html">Sign In</a>
                    <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </form>
            </div>
        )
    }
}