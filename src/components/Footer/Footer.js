
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import  {NavLink} from 'reactstrap'
import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer pt-5 ">
            <div className="container">
                <div className=" row-grid align-items-center mb-5 row">
                    <div className="col-lg-6 text-left">
                       <h3 className=" text-white font-weight-light mb-2 pl-0">Thank you for supporting us!</h3>
                      <h4 className=" mb-0 font-weight-light text-white">Let's get in touch on any of these platforms.</h4>
                    </div>
                    <div className="text-lg-center btn-wrapper col-lg-6">
                        <Link to="/"   className="btn-icon-only rounded-circle btn btn-instgram text-white">
                            <InstagramIcon />
                        </Link>
                        <Link to="/"  className="btn-icon-only rounded-circle ml-1 btn btn-facebook text-white">
                            <FacebookIcon />
                        </Link>
                        <Link to="/"  className="btn-icon-only rounded-circle ml-1 btn btn-whatsAPP text-white">
                          <WhatsAppIcon />
                        </Link>
                    </div>
                </div>
                    <hr/>
                <div className=" align-items-center justify-content-md-between row">
                    <div className="col-md-6">
                        <div className=" copyright text-white ">© 2021 <Link to="/" className="text-white" > Calma</Link>.
                        </div>
                    </div>
                   <div className="col-md-6">
                    <ul className=" nav-footer justify-content-end ">
                        <li className="nav-item">
                            <Link to="/about"   className="footer-link text-white ">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/blogs"  className="footer-link text-white">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/privace"   className="footer-link text-white">Privacy and Policy</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
