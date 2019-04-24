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
            <div className="container-fluid" style={{marginTop: "40px"}}>
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
                <div className="container">
                <div className="row" >
                    <div className="col-md-12" style={{textAlign: "center"}}>
                        <p style={{color:"#999",fontSize: "22px"}}>Display Name</p>
                        
                        
                            <div className="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                            <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Username" required autofocus value={this.state.username} onChange={this.emailChange}/>
                        <label for="inputEmail">{localStorage.getItem('Username')}</label>
                    </div>
                                
                            
                        
                        </div>
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Phone</p>
                        <div className="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div className="card-body">
                            <div className="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>(469) 270-1938</h5>
                            </div>
                        </div>
                        </div>   
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Change PIN</p>
                        <div className="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div className="card-body">
                            <div className="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>****</h5>
                            </div>
                        </div>
                        </div>
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Profile Description</p>
                        <div className="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div className="card-body">
                            <div className="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <p>This!</p>
                            </div>
                        </div>
                        </div>
                        <button className="btn btn-primary" style={{margin: "20px"}}>Update</button>
                    </div>
                </div>
            
                </div>
            </div>
        )
    }
    
}