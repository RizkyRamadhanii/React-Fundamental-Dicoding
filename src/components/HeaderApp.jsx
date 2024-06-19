import React from 'react';
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

function HeaderApp ({ logout, name }) {
    return (
        <ThemeConsumer>
            {
                ({theme, toggleTheme}) => {
                    return (
                        <header>
                            <h1><Link to="/">Notes</Link></h1>
                            <ul>
                            <li><button onClick={toggleTheme}>{theme === 'light' ? <FiMoon /> : <FiSun />}</button></li>
                            <li> <button onClick={logout}>{name}<FiLogOut/></button></li>
                            </ul>
                        </header>
            )
        }
    }
    </ThemeConsumer>
    );
}

HeaderApp.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default HeaderApp;