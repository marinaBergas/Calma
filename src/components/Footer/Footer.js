
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import  {NavLink} from 'reactstrap'
import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className=" row-grid align-items-center mb-5 row">
                    <div className="col-lg-6 text-left">
                       <h3 className=" text-primary font-weight-light mb-2 pl-0">Thank you for supporting us!</h3>
                      <h4 className=" mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                    </div>
                    <div className="text-lg-center btn-wrapper col-lg-6">
                        <Link to="/"   className="btn-icon-only rounded-circle btn btn-twitter">
                            <TwitterIcon color="primary"/>
                        </Link>
                        <Link to="/"  className="btn-icon-only rounded-circle ml-1 btn btn-facebook ">
                            <FacebookIcon color="primary"/>
                        </Link>
                        <Link to="/"  className="btn-icon-only rounded-circle ml-1 btn btn-github">
                          <GitHubIcon color="primary"/>
                        </Link>
                    </div>
                </div>
                    <hr/>
                <div className=" align-items-center justify-content-md-between row">
                    <div className="col-md-6">
                        <div className=" copyright">© 2021 <Link to="/"  > Calma</Link>.
                        </div>
                    </div>
                   <div className="col-md-6">
                    <ul className=" nav-footer justify-content-end ">
                        <li className="nav-item">
                            <Link to="/about"   className="footer-link ">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/blogs"  className="footer-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"   className="footer-link ">Privacy and Policy</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
