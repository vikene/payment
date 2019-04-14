import React from "react";

export default class Settings extends React.Component{
    render(){
        return (
            <div class="container-fluid" style={{marginTop: "40px"}}>
                <div class="row" style={{height: "250px"}}>
                    <div  style={{margin: "0 auto"}}>
                        <div style={{textAlign: "center"}}>
                            <img src="https://media.licdn.com/dms/image/C5603AQHULsiaPLHOxg/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=PhkPRL6yTdzDBUO0m1ewgYUIag72elbKMeQPJkXwkmM" width="100px" height="100px" style={{borderRadius: "100px"}}/>
                            <h5 style={{marginTop: "10px"}}>VigneashSundar</h5>
                            <h6 style={{color: "#00c730"}}>$vikene</h6>
                        </div>
                    </div>  
                </div>
                <hr />
                <div class="row" >
                    <div class="col-md-12" style={{textAlign: "center"}}>
                        <p style={{color:"#999",fontSize: "22px"}}>Display Name</p>
                        <div class="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div class="card-body">
                            <div class="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>Vigneash Sundar</h5>
                                
                            </div>
                        </div>
                        </div>
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Phone</p>
                        <div class="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div class="card-body">
                            <div class="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>(469) 270-1938</h5>
                            </div>
                        </div>
                        </div>   
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Change PIN</p>
                        <div class="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div class="card-body">
                            <div class="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <h5>****</h5>
                            </div>
                        </div>
                        </div>
                        <p style={{color:"#999",fontSize: "22px", marginTop: "20px"}}>Profile Description</p>
                        <div class="card " style={{width: "18rem",margin: "0 auto"}}>
                        <div class="card-body">
                            <div class="row"  style={{width: "100%",margin: "0 auto", textAlign: "center"}}>
                                <p>This is me GUYS!</p>
                            </div>
                        </div>
                        </div>
                        <button class="btn btn-primary" style={{margin: "20px"}}>Update</button>
                    </div>
                </div>
            
            
            </div>
        )
    }
}