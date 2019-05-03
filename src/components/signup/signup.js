import React from "react";
import Navigation from "../navigation";
import "../signin/signin.css";
import {commitMutation, graphql} from "react-relay";
import environment from "../../environment";

const SignupMutation = graphql`
    mutation signupMutation($fname: String, $lname: String, $ssn: String, $email: String,$username: String, $password: String){
        createUser(fname: $fname, lname: $lname, ssn: $ssn, email: $email,username: $username , password: $password){
            username
        }
    }
`
class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            fname: '',
            fnameerror:'',
            lname: '',
            lnameerror:'',
            ssn: '',
            username: '',
            usernameerror:'',
            email: '',
            password: '',
            passerror:''
        }
        this.onfnameChange = this.onfnameChange.bind(this);
        this.onlnameChange = this.onlnameChange.bind(this);
        this.onssnChange = this.onssnChange.bind(this);
        this.onusernameChange = this.onusernameChange.bind(this);
        this.onpasswordchange = this.onpasswordchange.bind(this);
        this.submit = this.submit.bind(this);
    }
    onfnameChange(event){
        this.setState({fname: event.target.value});
    }
    onlnameChange(event){
        this.setState({lname: event.target.value});
    }
    onssnChange(event){
        this.setState({ssn: event.target.value});
    }
    onusernameChange(event){
        this.setState({username: event.target.value, email: event.target.value});
    }
    onpasswordchange(event){
        this.setState({password: event.target.value});
    }
    validate = () => {
        let isError = false;
        const errors = {
            usernameerror:'',
            passerror:'',
            fnameerror:'',
            lnameerror:''

        }
        if (!(this.state.username)) {
            isError = true;
            errors.usernameerror = "Username is your email and cannot be empty!";
          }

          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if(!pattern.test(this.state.username)){
            isError = true;
            errors.usernameerror = "Please enter a valid email!";

         }

         if(!(this.state.password)){
             isError=true;
             errors.passerror="Nice try, password cannot be empty!";
         }
         if(!(this.state.password).match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$&]).*$/)){
           isError=true;
         errors.passerror="Try a STRONGER password!";

       }
       if(this.state.password.length<10){
         isError=true;
       errors.passerror="Try a LONGER and STRONGER password!";

       }
         if(!(this.state.fname)){
             isError=true;
             errors.fnameerror="First Name cannot be empty!";
         }
         if(this.state.fname.length<2){
             isError=true;
             errors.fnameerror="First Name should atleast be 2 characters long!";
         }
         if(this.state.lname.length<2){
             isError=true;
             errors.lnameerror="Last Name should atleast be 2 characters long!";
         }
         if(!(this.state.lname)){
            isError=true;
            errors.lnameerror="Last Name cannot be empty!";
         }
         if(!(this.state.fname).match(/^[a-zA-Z ]+$/)){
             isError=true;
             errors.fnameerror="Enter only alphabets!"
         }
         if(!(this.state.lname).match(/^[a-zA-Z ]+$/)){
            isError=true;
            errors.lnameerror="Enter only alphabets!"
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
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email
        }
        if(!err){

        commitMutation(environment,{
            mutation: SignupMutation,
            variables,
            onCompleted: (response) => {
                const user = response.createUser;
                if(user !== null){
                    if(user.username !== null){
                        this.props.history.push("/signin")
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
                    <h1 className = "h3 mb-3 font-weight-normal">Sign Up</h1>
                </div>
                <div className="form-label-group">
                        <input type="name" id="inputfname" className="form-control" placeholder="First Name" required autoFocus value={this.state.fname} onChange={this.onfnameChange} />
                        <label htmlFor="inputfname">First Name</label>
                        <div className="err">{this.state.fnameerror}</div>

                    </div>
                    <div className="form-label-group">
                            <input type="name" id="inputlname" className="form-control" placeholder="Last Name" required autoFocus value={this.state.lname} onChange={this.onlnameChange} />
                            <label htmlFor="inputlname">Last Name</label>
                            <div className="err">{this.state.lnameerror}</div>

                    </div>

                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus  value={this.state.email} onChange={this.onusernameChange}/>
                    <label htmlFor="inputEmail">Email address</label>
                    <div className="err">{this.state.usernameerror}</div>

                </div>


                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onpasswordchange}/>
                    <label htmlFor="inputPassword">Password</label>
                    <div className="err">{this.state.passerror}</div>

                </div>

                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-success btn-block"  onClick={this.submit}>Sign Up</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </div>
            </div>
        )
    }
}

export default Signup;
