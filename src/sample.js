import React from "react";
class Sample extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.data}</h1>
                <h2>{this.props.myname}</h2>
            </div>
             
        )
    }
}


export default Sample;
