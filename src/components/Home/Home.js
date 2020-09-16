import React, { useContext, useState } from 'react';
import './Home.css'
import logo from '../../images/logo.svg'
import sajek from '../../images/image/Sajek.png'
import sreemangol from '../../images/image/Sreemongol.png'
import sundorbon from '../../images/image/sundorbon.png'
import background from '../../images/image/back1.png'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import {nameContex} from '../../App'


const Home = () => {
    // const [state, setState] = useState("cox's bazar");
    // const handleClick = (name) =>{
    //     setState(name);
    // }

    const [name, setname, handleClick] = useContext(nameContex);
    
    const homeBackground = {
        backgroundImage: `url(${background})`,
    }
    const slideCox = {
        backgroundImage: `url(${sajek})`,
    }
    const slideSreemangol = {
        backgroundImage: `url(${sreemangol})`,
    }
    const slideSundorbon = {
        backgroundImage: `url(${sundorbon})`,
    }
    return (
        <div className="main__home" style={homeBackground}>
            <div className="home__container">
                <Header></Header>
                {/* <div className="header">
                    <div className="header__logo">
                        <img src={logo} alt=""/>
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
                </div> */}
                <div className="main">
                    <div className="main__text">
                        <h1>{name}</h1>
                        <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>

                        <Link to="/booking" style={{textDecoration: 'none'}}>
                           <button>Booking</button>
                        </Link>
                    </div>
                    <div className="main__slide">
                        <div className="slide__cox" style={slideCox} onClick={()=>handleClick("cox's bazar")}>
                           <h3>cox's bazar</h3>
                        </div>
                        <div className="slide__sreemangal" style={slideSreemangol} onClick={()=>handleClick("sreemangal")}>
                            <h3>sreemangal</h3>
                        </div>
                        <div className="slide__sundorans" style={slideSundorbon} onClick={()=>handleClick("sundorbans")}>
                            <h3>sundorbans</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;