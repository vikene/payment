import React from "react";
import {graphql, createFragmentContainer} from 'react-relay'
class TransactionItem extends React.Component{
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    render(){
        var t_username = this.props.item.t_username;
        if(this.props.item.t_username === localStorage.getItem("Username")){
            t_username = this.props.item.f_username
        }
        return (
            <div className="row">
                <div className="col-md-4" style={{float: "left"}}>
                    <span  style={{height: "40px", width: "40px",display: "inline"}} >
                        <div style={{height: "40px", width: "40px", backgroundColor: this.getRandomColor(), borderRadius: "30px", textAlign: "center",paddingTop: "10px", color: "white",float: "left"}}>
                            {t_username[0]}
                        </div>
                    </span>
                    <p style={{paddingTop: "15px", paddingLeft: "55px"}}>{t_username}</p>
                </div>
                <div className="col-md-3" style={{textAlign: "center", paddingTop: "10px"}}>
                    {this.props.item.reason}
                </div>
                <div className="col-md-3" style={{textAlign: "center", paddingTop: "10px"}}>
                    {this.props.item.date}
                </div>
                <div className="col-md-2" style={{textAlign: "center", paddingTop: "10px"}}>
                    ${this.props.item.amount}
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(TransactionItem, graphql`
fragment TransactionItem_item on Transaction{
    t_username
    f_username
    amount
    date
    reason
}
`)