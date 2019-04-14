import React from "react";
import HorizontalNav from "../horizontalNav";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Transaction from "../transaction/transaction";
import Wallet from "../wallet/wallet";
import Settings from "../settings/settings";
import newTransaction from "../newTransaction/newTransaction";
class Dashboard extends React.Component{
    render(){
        return (
            <div>
                <div className="page-wrapper primary-theme toggled">
                <Link id="show-sidebar" className="btn btn-sm btn-dark" to="/dashboard/">
                    <i className="fas fa-bars"></i>
                </Link>
                <Router>
                <HorizontalNav username="Namratha"  userid="12345"/>
                <main className="page-content">
                        <Route exact path="/dashboard/" component={Transaction} />
                        <Route path="/dashboard/wallet" component={Wallet} />
                        <Route path="/dashboard/settings" component={Settings} />
                        <Route path="/dashboard/new" component={newTransaction} />
                </main>
                </Router>
                </div>
            </div>
        )
    }
}

export default Dashboard;