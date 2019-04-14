import React from "react";
import Sample from "./sample";
import Navigation from "./components/navigation";
import Footer from "./components/footer/footer";


class SampleList extends React.Component{
    constructor(){
        super();
        this.data = ["hello","world"];
    }
    render(){
        return (

            <div>
                <Navigation element={["Aish", "JAVs", "Namratha"]} />
                {
                    this.data.map(
                        (d) => <Sample data={d} myname="vigneash" />
                    )
                }
                <Footer />
            </div>

            
        )
    }
}

export default SampleList;