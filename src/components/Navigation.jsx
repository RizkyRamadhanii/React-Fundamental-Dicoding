import React from "react";
import { Link } from "react-router-dom";
import {FiPlusCircle, FiArchive, FiHome} from 'react-icons/fi';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/archive"><FiArchive /></Link></li>
                <li><Link to="/add"><FiPlusCircle /></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;