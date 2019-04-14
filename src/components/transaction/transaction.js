import React from "react";
import TransactionItem from "../transactionitem/transactionitem";
export default class Transaction extends React.Component{
    render(){
        const arr = [["Vigneash", "Chase", "Sep 12, 2019","$30"],["Namratha", "Wells", "Sep 12, 2019","$20"],["Aishwarya", "Chase", "Sep 12, 2019","$30"]]
        return (
            <div className="container-fluid">
                <h2>Welcome!</h2>
                <hr />
                <div className="row">
                    <div className="form-group col-md-12">
                    <p>Activity</p>   
                    </div>
                    <div className="form-group col-md-12">
                        {
                            arr.map(
                                (dd) => 
                                <div>
                                <TransactionItem name={dd[0]} location={dd[1]} date={dd[2]}
                                            cost={dd[3]} />
                                            <hr />
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}