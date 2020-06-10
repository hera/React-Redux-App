import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';

function Nav (props) {
    return (
        <nav className="col" className="Nav">
            <ul className="Nav__links">
                <li><Link to="/" className="Nav__link">Home</Link></li>
                <li><Link to="/random" className="Nav__link">Random character</Link></li>
                <li><Link to="/search" className="Nav__link">Search</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;