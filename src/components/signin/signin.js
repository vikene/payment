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
            usernameError: '',
            passError:''
            
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
    validate = () => {
        let isError = false;
        const errors = {
            usernameError:'',
            passError:''
        }
        if (!(this.state.username)) {
            isError = true;
            errors.usernameError = "Username is your email and cannot be empty!";
          }

          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if(!pattern.test(this.state.username)){
            isError = true;
            errors.usernameError = "Please enter a valid email!";

         }

         if(!(this.state.password)){
             isError=true;
             errors.passError="Nice try, password cannot be empty!"
         }
         if(!(this.state.password).match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
             isError=true;
             errors.passError="Nice try, password cannot be empty!"

         }
          this.setState({
            ...this.state,
            ...errors
          });
      
          return isError;


    }
    submit(){
        const err = this.validate();

       
        const variables = {
            username: this.state.username,
            password: this.state.password
        }
        if (!err){
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
                    <input type="email" id="inputemail" className="form-control" placeholder="Email" required  value={this.state.username} onChange={this.emailChange} />
                    <div className="err">{this.state.usernameError}</div>

                       
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  value={this.state.password} onChange={this.passwordChange}/>
                        <div className="err">{this.state.passError}</div>

                       
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