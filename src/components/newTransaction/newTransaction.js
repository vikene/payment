import React from "react";
import {commitMutation, graphql} from "react-relay";
import environment from "../../environment";

const newTransactionMutation = graphql`
    mutation newTransactionMutation($f_username: String,$t_username: String,$amount: Float,$date: String, $reason: String, ){
        addTransaction(f_username: $f_username , t_username: $t_username, amount: $amount, date: $date, reason: $reason){
            f_username
            t_username
            amount
        }
    }
`
export default class newTransaction extends React.Component{
    constructor(){
       super();
        this.amountChange = this.amountChange.bind(this);
        this.memoChange = this.memoChange.bind(this);
        this.friendChange = this.friendChange.bind(this);
        this.state = {amount: '$0'};
        this.submit = this.submit.bind(this);
        
    }
    amountChange(event){
        this.setState({amount: event.target.value});
    }
    friendChange(event){
        this.setState({t_username: event.target.value});
    }
    memoChange(event){
        this.setState({reason: event.target.value});
    }
    componentDidMount(){
        this.setState({f_userName: this.props.username});
       
    }
    submit(){
        const today = new Date()
        const variables = {
            f_username: localStorage.getItem("Username"),
            t_username: this.state.t_username,
            amount: parseFloat(this.state.amount.split('$')[1]),
            date: today.getDate().toString(),
            reason: this.state.reason
        }
        commitMutation(environment,{
            mutation: newTransactionMutation,
            variables,
            onCompleted: (response) => {
                const transaction = response.addTransaction;
                if(transaction !== null){
                    if(transaction.amount !== null){
                        this.props.history.push("/dashboard")
                    }
                }
            }
        })
    }
    render(){
        
        return (
            <div>
            
            <div className="container-fluid" style={{marginTop: "40px"}}>
                <div className="row">
                    <div className="col-md-6" style={{ color: "#00c730"}}>
                        <input type="text" style={{ border: "none", fontSize: "80px", textAlign: "center", color:"#00c730"}} value={this.state.amount} onChange={this.amountChange}/>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-6" style={{margin: "40px auto"}}>
                        <div className="input-group mb-3" style={{height: "100px",width: "100%"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">To:</span>
                        </div>
                            <input type="text" style={{fontSize: "40px"}} className="form-control" placeholder="Friend name" aria-label="Username" aria-describedby="basic-addon1" value={this.state.t_username} onChange={this.friendChange} />
                        </div>
                        <div className="input-group mb-3" style={{ height: "100px", width: "100%", marginTop: "50px"}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">For:</span>
                        </div>
                        <input type="text" style={{fontSize: "40px"}} className="form-control" placeholder="Dinner, Rent" aria-label="Username" aria-describedby="basic-addon1" value={this.state.reason} onChange={this.memoChange} />
                        </div>
                        <div className="row" style={{marginTop: "50px"}}>
                            <div className="col-md-6">
                                <button style={{width: "100%", height: "75px", borderRadius: "10px", backgroundColor: "#3fde16", color: "#fff"}}>
                                    Request
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button style={{width: "100%", height: "75px", borderRadius: "10px", backgroundColor: "#3fde16", color: "#fff"}} onClick={this.submit}>
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