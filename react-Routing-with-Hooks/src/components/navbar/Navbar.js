import React from "react";
import {Link} from 'react-router-dom';

let Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">RapidValue IT Services</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;
