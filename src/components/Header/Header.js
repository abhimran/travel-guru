import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { nameContex } from '../../App';
import logo from '../../images/logo.svg'
import { handleSignOut } from '../Login/LoginManager';
import './Header.css'

const Header = () => {
    const [name, setName, handleClick, loggedInUser, setLoggedInUser, user, setUser] = useContext(nameContex)

    const signOut = () =>{
      handleSignOut()
      .then(res=>{
        setUser(res);
        setLoggedInUser(res);
      })
  }
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/" style={{textDecoration: 'none'}}>
                 <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="header__searchbox">
                <input type="text" placeholder="Search your destination.."/>
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
                {
                    ((loggedInUser.displayName || loggedInUser.name) === undefined ? (
                        <>
                        <Link to="/login" style={{textDecoration: 'none'}}>
                            <button>Login</button>
                        </Link>
                        </>
                    ):(
                        <>
                           <button onClick={signOut}>{(user.isSignin) === false ? 'Login': 'Logout'}{loggedInUser.displayName}{loggedInUser.name}</button>
                        </>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Header;