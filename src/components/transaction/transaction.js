import React from "react";
import TransactionItem from "../transactionitem/TransactionItem";
import {graphql, createFragmentContainer} from 'react-relay';
import TransactionPage from "./TransactionPage";
 class Transaction extends React.Component{
    render(){
        const arr = [["Vigneash", "Chase", "Sep 12, 2019","$30"],["Namratha", "Wells", "Sep 12, 2019","$20"],["Aishwarya", "Chase", "Sep 12, 2019","$30"]]
        return (
            <div className="container-fluid">
                <h2>Welcome!</h2>
                <hr />
                <div className="row">
                    <div className="form-group col-md-12">
                    <p>Transactions</p>   
                    </div>
                    <div className="form-group col-md-12">
                        <TransactionPage />
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
export default Transaction;