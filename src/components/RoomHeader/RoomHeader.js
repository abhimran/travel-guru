import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { nameContex } from '../../App';
import logo from '../../images/Logo.png'
import { handleSignOut } from '../Login/LoginManager';
import './RoomHeader.css'

const RoomHeader = () => {
    const [name, setName, handleClick, loggedInUser, setLoggedInUser, user, setUser] = useContext(nameContex)
     const signOut = () =>{
      handleSignOut()
      .then(res=>{
        setUser(res);
        setLoggedInUser(res);
      })
  }
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

export default RoomHeader;