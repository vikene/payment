import React from "react";
import Navigation from "../navigation";
import Footer from "../footer/footer";
export default class About extends React.Component{
    render(){
        return (
            <div>
                <Navigation />
                <div className="container">
                    <div className="row row-header ">
                        <div className="col-12 col-sm-6">
                            <h1> </h1>
                            <p>S </p>
                        </div>
                        <div className="col-12 col-sm">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-header ">
                        <div className="col-12 col-sm-6">
                            <h1> </h1>
                            <p> </p>
                        </div>
                        <div className="col-12 col-sm">
                        </div>
                    </div>
                </div>
        

            <div className="container">
                <div className="row row-header align-items-center" >
                        
                    <div className="col-12 col-sm" id = "about">
                    <h3>About Us</h3>
                    <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col-12 col-sm-6">
                        <h2>Simplicity is our Motto</h2>
                        <p>We are a small group of focussed developers wanting to change the world with the software we create! Our ideas are creative and we never get tired of learning!</p>
                    </div>
                </div>
            </div>

                <Footer />
            </div>
        )
    }
}