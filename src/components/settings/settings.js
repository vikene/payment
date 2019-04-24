import React from "react";
import Name from "../name";
import UserAvatar from "react-user-avatar";
import { extname } from "path";
import "../exam.css";


export default class Settings extends React.Component{
    render(){
        return (
            <div className="container-fluid" style={{marginTop: "40px"}}>
                <div className="row" style={{height: "250px"}}>
                    <div  style={{margin: "0 auto"}}>
                        <div style={{textAlign: "center"}}>

                            
                            <Name/>
                             <UserAvatar size="100" name={localStorage.getItem('Username')} colors={['black', 'whitesmoke']} className="UserAvatar--inner"/>
                             <h6 style={{color: "#00c730"}}>{localStorage.getItem('Username')}</h6>
                             <h6 style={{color: "#00c730"}}>{localStorage.getItem("Ssn")}</h6>                           

                        </div>
                    </div>  
                </div>
                <hr />
                <div className="row" >
                    <div className="col-md-12" style={{textAlign: "center"}}>
                        <p style={{color:"#999",fontSize: "22px"}}>Display Name</p>
                        <div className="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div className="card-body">
                            <div className="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>{localStorage.getItem("Fname")}</h5>
                                
                            </div>
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
        )
    }
    componentDidMount(){
        let token = localStorage.getItem("Bearer")
        if(token === null){
            this.props.history.push("/")
        }
    }
}