import React from "react";
import "./wallet.css";
import {createFragmentContainer, graphql} from "react-relay";

 class Wallet extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div style={{"margin": "0 auto","textAlign": "center", "fontSize": "50px", "color": "#00c730"}}>
                        ${parseFloat(this.props.wallet.amount).toFixed(2)}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{"textAlign": "center"}}>
                        <p style={{"color":"#999","fontSize": "22px"}}>Direct Deposit</p>
                        <div className="card " style={{"width": "18rem","margin": "0 auto"}}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>02345890</h5>
                                    <h6>Routing</h6>
                                </div>
                                <div className="col-md-6">
                                    <h5>778*******</h5>
                                    <h6>Account</h6>
                                </div>
                            </div>
                        </div>
                        </div>
                        <p style={{"color": "#999", "fontSize": "22px", "marginTop": "50px"}}>Card</p>
                        <div className="card col-md-6 " style={{"width": "100%","margin": "0 auto"}}>
                        <div className="card-body">
                            <div className="row">
                                <form action="/charge" method="post" id="payment-form" style={{"width": "100%"}}>
                                <div className="form-row">
                                    <label htmlFor="card-element">
                                    Credit or debit card
                                    </label>
                                    <div id="card-element" style={{"width": "100%"}}>
                                    </div>

                                    <div id="card-errors" role="alert"></div>
                                </div>

                                <button className="btn btn-primary" style={{"marginTop": "20px"}}>Confirm Payment</button>
                                </form>
                            </div>
                        </div>
                        </div>
                        
                        <p style={{"color": "#999", "fontSize": "22px", "marginTop": "50px"}}>Cash out</p>
                        <div className="card col-md-6 " style={{"width": "100%","margin": "0 auto", "backgroundColor":  "#bbb","color":"#fff"}}>
                            
                                <p style={{"marginTop": "20px"}}>Cash Out</p>
                        </div>
                        <p style={{"color": "#999", "fontSize": "22px", "marginTop": "20px"}}>Limits</p>
                        <div className="card col-md-6 " style={{"width": "100%","margin": "0 auto"}}>
                        <div className="card-body">
                                <h4>Send</h4>
                                <h6>$500 per Week</h6>
                                <hr />
                                <h4>Cash out</h4>
                                <h6>$500 per Week</h6>
                            
                        </div>
                        </div>
                        
                    </div>
                </div>
         </div>
        )
    }
    componentDidMount(){
        var script = document.createElement('script');
        script.src="http://localhost:3000/sample.js";
        document.body.appendChild(script);
    }
}

export default createFragmentContainer(Wallet, graphql`
    fragment Wallet_wallet on Wallet{
        type
        bankname
        routingnumber
        accountnumber
        zipcode
        creditcard
        cvv
        expmonth
        expyear
        amount
        username
    }
`)

