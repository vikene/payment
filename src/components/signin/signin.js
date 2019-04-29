import React from "react";
import Navigation from "../navigation";
import "./signin.css";
import {commitMutation, graphql} from "react-relay";
import environment from "../../environment";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


const SignInMutation = graphql`
    mutation signinMutation($username: String, $password: String){
        login(username: $username , password: $password){
            username
            token
            
        }
    }
`
export default class Signin extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            
        }
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    emailChange(event){
        this.setState({username: event.target.value});
    }
    passwordChange(event){
        this.setState({password: event.target.value});
    }
    submit(){
       
        const variables = {
            username: this.state.username,
            password: this.state.password
        }
        commitMutation(environment,{
            mutation: SignInMutation,
            variables,
            onCompleted: (response) => {
                const login = response.login;
                if(login !== null){
                    if(login.token !== null){
                        localStorage.setItem("Bearer", login.token);
                        localStorage.setItem("Username", login.username);
                        this.props.history.push("/dashboard")
                    }
                }
            }
        })
    }
     
    render(){
        return (
            <div>
                <Navigation />
                
                <div className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className = "h3 mb-3 font-weight-normal">Sign In</h1>
                    </div>

                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={this.state.username} onChange={this.emailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                        <label for="inputEmail">Email address</label>
                       
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  value={this.state.password} onChange={this.passwordChange}/>
                        <label for="inputPassword">Password</label>
                       
                    </div>

                    <div className="checkbox mb-3">
                        <label> </label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        
                    </div>
                    <button className="btn btn-large btn-success btn-block" onClick={this.submit}>Sign In</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </div>
            </div>
        )
    }
    componentDidMount(){
       
    }
}