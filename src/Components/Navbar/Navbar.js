import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import './Navbar.css'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Qendresa</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className='nav-link active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item" ><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item" ><a className="nav-link" href="#projects">Project</a></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Pages</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        <Link to="/" className="nav-link active">Home</Link>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#services">Services</a>
                        <a className="nav-link" href="#projects">Project</a>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;