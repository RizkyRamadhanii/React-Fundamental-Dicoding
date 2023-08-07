import React from 'react';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

function HeaderApp () {
    return (

        <header>
             <h1><Link to="/">Notes</Link></h1>
        </header>
      
    );
}

export default HeaderApp;