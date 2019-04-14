import React from "react";
import Navigation from "../navigation";
import Footer from "../footer/footer";
export default class Default extends React.Component{
    render(){
        return (
            <div>
                <Navigation />
                <header className="jumbotron">
                    <div className="container">
                        
                    </div>
                
                </header>
                <Footer />
            </div>
        )
    }
}