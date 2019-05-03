import React from "react";
import UserAvatar from "react-user-avatar";
import { extname } from "path";
import "../exam.css";


export default class Settings extends React.Component{

    constructor() {
        super();
        this.state = {
          fname: '',
          lname: '',
          username: ''
        }
        this.onfnameChange = this.onfnameChange.bind(this);
        this.onlnameChange = this.onlnameChange.bind(this);
        this.onusernameChange=this.onusernameChange.bind(this);


      }
    onfnameChange(event){
        this.setState({fname: event.target.value});
    }
    onlnameChange(event){
        this.setState({lname: event.target.value});
    }
    onusernameChange(event){
      this.setState({username: event.target.value, email: event.target.value});
  }

    render(){
        return (
            <div className="container-fluid" style={{marginTop: "10px"}}>
                <div className="row" style={{height: "250px"}}>
                    <div  style={{margin: "0 auto"}}>
                        <div style={{textAlign: "center"}}>



                             <UserAvatar size="100" name={localStorage.getItem('Username')} colors={['whitesmoke']} className="UserAvatar--inner"/>
                             <h6 style={{color: "#00c730"}}>{localStorage.getItem('Username')}</h6>


                        </div>
                    </div>
                </div>
                <hr />
                <div className="form-update">
                <div className="text-center mb-4">
                <h1 className = "h3 mb-3 font-weight-normal">Update your Information</h1>

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
                <button className="btn btn-lg btn-success btn-block" >Update!</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </div>


                </div>

        )
    }


}
