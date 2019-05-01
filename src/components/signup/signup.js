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
    submit(){
        if(!this.state.username){

        }
        const variables = {
            username: this.state.username,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email
        }
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
                    </div>
                    <div className="form-label-group">
                            <input type="name" id="inputlname" className="form-control" placeholder="Last Name" required autoFocus value={this.state.lname} onChange={this.onlnameChange} />
                            <label htmlFor="inputlname">Last Name</label>
                    </div>
                    
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus  value={this.state.email} onChange={this.onusernameChange}/>
                    <label htmlFor="inputEmail">Email address</label>
                </div>


                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onpasswordchange}/>
                    <label htmlFor="inputPassword">Password</label>
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