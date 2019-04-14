import React from "react";

export default class newTransaction extends React.Component{
    render(){
        return (
            <div>
            
            <div class="container-fluid" style={{marginTop: "40px"}}>
                <div class="row">
                    <div class="col-md-6" style={{ color: "#00c730"}}>
                        <input type="text" style={{ border: "none", fontSize: "80px", textAlign: "center", color:"#00c730"}} placeholder="$0"/>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-md-6" style={{margin: "40px auto"}}>
                        <div class="input-group mb-3" style={{height: "100px",width: "100%"}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">To:</span>
                        </div>
                            <input type="text" style={{fontSize: "40px"}} class="form-control" placeholder="Friend name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3" style={{ height: "100px", width: "100%", marginTop: "50px"}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">For:</span>
                        </div>
                        <input type="text" style={{fontSize: "40px"}} class="form-control" placeholder="Dinner, Rent" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="row" style={{marginTop: "50px"}}>
                            <div class="col-md-6">
                                <button style={{width: "100%", height: "75px", borderRadius: "10px", backgroundColor: "#3fde16", color: "#fff"}}>
                                    Request
                                </button>
                            </div>
                            <div class="col-md-6">
                                <button style={{width: "100%", height: "75px", borderRadius: "10px", backgroundColor: "#3fde16", color: "#fff"}}>
                                Pay
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}