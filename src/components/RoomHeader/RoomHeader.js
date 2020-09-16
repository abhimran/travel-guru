import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import './RoomHeader.css'

const RoomHeader = () => {
    return (
        <div className="Room__header">
            < div className = "Room__header_logo" >
                <Link to="/" style={{textDecoration: 'none'}}>
                 <img src={logo} alt=""/>
                </Link>
            </div>

            <div className="Room__header_menu">
                <ul>
                    <li>News</li>
                    <li>Destination</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="Room__header_login">
                <button>Login</button>
            </div>
        </div>
    );
};

export default RoomHeader;