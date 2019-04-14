import React from "react";

export default class TransactionItem extends React.Component{
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    render(){

        return (
            <div className="row">
                <div className="col-md-4" style={{float: "left"}}>
                    <span  style={{height: "40px", width: "40px",display: "inline"}} >
                        <div style={{height: "40px", width: "40px", backgroundColor: this.getRandomColor(), borderRadius: "30px", textAlign: "center",paddingTop: "10px", color: "white",float: "left"}}>
                            {this.props.name[0]}
                        </div>
                    </span>
                    <p style={{paddingTop: "15px", paddingLeft: "55px"}}>{this.props.name}</p>
                </div>
                <div className="col-md-3" style={{textAlign: "center", paddingTop: "10px"}}>
                    {this.props.location}
                </div>
                <div className="col-md-3" style={{textAlign: "center", paddingTop: "10px"}}>
                    {this.props.date}
                </div>
                <div className="col-md-2" style={{textAlign: "center", paddingTop: "10px"}}>
                    {this.props.cost}
                </div>
            </div>
        )
    }
}