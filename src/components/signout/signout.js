import React from "react";

export default class SignOut extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (<h5>Logging out!</h5>)
    }
    componentDidMount(){
        localStorage.removeItem("Bearer");
        localStorage.removeItem("Username");
        this.props.history.push("/");
        window.location.reload();
    }
}