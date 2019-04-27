import React from "react";
import { Textbox, Textarea, Radiobox, Checkbox, Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import UserAvatar from "react-user-avatar";
import { extname } from "path";
import "../exam.css";
import {commitMutation, graphql} from "react-relay";
import environment from "../../environment";

export default class Settings extends React.Component{

    constructor(){
        super();
        this.state = {
            username: '',
            fname: ''
        }
        this.emailChange = this.emailChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    emailChange(event){
        this.setState({username: event.target.value});
    }
    nameChange(event){
        this.setState({fname: event.target.value});
    }
    submit(){
        const variables = {
            username: this.state.username,
            fname: this.state.fname
        }
        
    }
    render(){
        return (
            <div className="container-fluid" style={{marginTop: "10px"}}>
                <div className="row" style={{height: "250px"}}>
                    <div  style={{margin: "0 auto"}}>
                        <div style={{textAlign: "center"}}>

                            
                            
                             <UserAvatar size="100" name={localStorage.getItem('Username')} colors={['whitesmoke']} className="UserAvatar--inner"/>
                             <h6 style={{color: "#00c730"}}>{localStorage.getItem('Username')}</h6>
                             <h6 style={{color: "#00c730"}}>{localStorage.getItem("Fname")}</h6>                           

                        </div>
                    </div>  
                </div>
                <hr />
                <div className="form-update">
                <div className="text-center mb-4">
                <h1 className = "h3 mb-3 font-weight-normal">Update your Information</h1>
                
                </div>

                <div className="form-label-group">
                        <input type="name" id="inputfname" className="form-control" placeholder="First Name" required autofocus value={this.state.fname} onChange={this.onfnameChange} />
                        <label for="inputfname">First Name</label>
                    </div>
                    <div className="form-label-group">
                            <input type="name" id="inputlname" className="form-control" placeholder="Last Name" required autofocus value={this.state.lname} onChange={this.onlnameChange} />
                            <label for="inputlname">Last Name</label>
                    </div>
                    
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus  value={this.state.email} onChange={this.onusernameChange}/>
                    <label for="inputEmail">Email address</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block"  onClick={this.submit}>Update!</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </div>
                
                </div>
                
        )
    }
    
}