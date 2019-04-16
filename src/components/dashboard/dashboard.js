import React from "react";
import HorizontalNav from "../horizontalNav";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Transaction from "../transaction/Transaction";
import WalletPage from "../wallet/WalletPage";
import Settings from "../settings/settings";
import newTransaction from "../newTransaction/newTransaction";
import SignOut from "../signout/signout";
class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <div className="page-wrapper primary-theme toggled">
                <Router>
                <Link id="show-sidebar" className="btn btn-sm btn-dark" to="/dashboard/">
                    <i className="fas fa-bars"></i>
                </Link>
                <HorizontalNav username={localStorage.getItem("Username")}  userid="12345"/>
                <main className="page-content">
                        <Route exact path="/dashboard/" component={Transaction} />
                        <Route path="/dashboard/wallet" component={WalletPage} />
                        <Route path="/dashboard/settings" component={Settings} />
                        <Route path="/dashboard/new" component={newTransaction} />
                        <Route path="/dashboard/signout" component={SignOut} />
                </main>
                </Router>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let token = localStorage.getItem("Bearer")
        if(token === null){
            this.props.history.push("/")
        }
    }
}

export default Dashboard;