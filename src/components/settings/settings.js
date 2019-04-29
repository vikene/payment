import React from "react";
import { Textbox, Textarea, Radiobox, Checkbox, Select } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import UserAvatar from "react-user-avatar";
import { extname } from "path";
import "../exam.css";
import {commitMutation, graphql} from "react-relay";
import environment from "../../environment";
import useForm from 'react-hook-form';

export default class Settings extends React.Component{

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
           
            fields["emailid"] = "";
           
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
       
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
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

                <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>
                    
                <label>Email ID:</label>
        <input className="mb-3"type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
                <button className="btn btn-lg btn-success "  onClick={this.submit} value="Register">Update!</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </form>
                </div>
                
                
                </div>
                
        )
    }
    
}
