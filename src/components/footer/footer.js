import React from "react";

class Footer extends React.Component{
    render(){
        return (
            <div>
                <div className = "container">
                    <div className="col-12">
                        <div className="card card-body bg-light">
                            <blockquote className="blockquote" id="block">
                                <p className="mb-0"><small> If you can't explain it simply, you don't understand it well enough.</small></p>
                                <footer className="blockquote-footer"> Albert Einstein,
                                    <cite title="Source Title">German Physicist, 1879</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className= "col-4 offset-1 col-sm-2">
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="./index.html">Home</a></li>
                                    <li><a href="./aboutus.html">About</a></li>
                                    
                                </ul>
                            </div>
                            <div className="col-7 col-sm-5">
                                <h5>Our Address</h5>
                                <address>
                                University of Texas at Arlington<br />
                                Arlington<br />
                                Texas 76019<br />
                                <i className="fa fa-phone fa-lg"></i> :+852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i> : +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:help@securepay.com">help@securepay.com</a>
                            </address>
                            </div>
                            <div className ="col-12 col-sm-4 align-self-center">
                                <div className="text-center">
                                    <a  className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-facebook"href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-linkedin"href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-twitter"href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                                    <a className="btn btn-social-icon btn-youtube"href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                                    <a className="btn btn-social-icon "href="mailto:"><i className="fa fa-envelope fa-lg"></i></a>
                                </div>
                            </div>
                    </div>
                    <div className="row justify-content-center">
                            <div className="col-auto">
                                <p>© Copyright 2019 SecurePay</p>
                            </div>
                    </div>
                    </div>
                </footer>
            </div>
            
        )
    }
}

export default Footer;