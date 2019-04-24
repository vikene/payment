import React from "react";
import Signup from '../components/signup/signup';


export default class Name extends React.Component{

    render(){
        return(
            <div className="displayName">
            <span className="name">{this.props.fname}
            </span>
            </div>
        )
    }
    
}