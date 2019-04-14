import React from "react";
import Navigation from "../navigation";
class Signup extends React.Component{
    render(){
        return (
            <div>
                <Navigation />
                <form className="form-signin">
                <div className="text-center mb-4">
                    <h1 className = "h3 mb-3 font-weight-normal">Sign Up</h1>
                </div>
                <div className="form-label-group">
                        <input type="name" id="inputfname" className="form-control" placeholder="First Name" required autofocus />
                        <label for="inputfname">First Name</label>
                    </div>
                    <div className="form-label-group">
                            <input type="name" id="inputlname" className="form-control" placeholder="Last Name" required autofocus />
                            <label for="inputlname">Last Name</label>
                    </div>
                    <div className="form-label-group">
                                <input type="password" id="ssn" className="form-control" placeholder="Social Security Number" required autofocus />
                                <label for="ssn">Social Security Number</label>
                            </div>
                <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputEmail">Email address</label>
                </div>


                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label for="inputPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019 SecurePay</p>
                </form>
            </div>
        )
    }
}

export default Signup;