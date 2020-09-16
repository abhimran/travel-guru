import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/" style={{textDecoration: 'none'}}>
                 <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="header__searchbox">
                <input type="text" placeholder="Search your destination..........."/>
            </div>
            <div className="header__menu">
                <ul>
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header__login">
                <button>Login</button>
            </div>
        </div>
    );
};

export default Header;