import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Default from "../default/default";
import About from "../about/about";
import Signin from "../signin/signin";
import Signup from "../signup/signup";
import Dashboard from "../dashboard/dashboard";


export default class Home extends React.Component{
    render(){
        return (
            <Router>
                <Route exact path="/" component={Default} />
                <Route path="/about" component={About} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" 
                    render={(props) => <Dashboard { ...props}  />}
                 />
                <Route path="/new" component={About} />
            </Router>
        )
    }
}