import React, { useContext, useState} from 'react';
import Header from '../Header/Header';
import './Booking.css'
import '../Home/Home.css'
import background from '../../images/image/back1.png'
import { nameContex } from "../../App";
import DatePicker from "react-date-picker";
import { Link } from 'react-router-dom';


const Booking = (props) => {
    const [name, setName, handleClick] = useContext(nameContex);
    const [value, onChange] = useState(new Date());
    const [value1, onChange1] = useState(new Date());
    
    const homeBackground = {
        backgroundImage: `url(${background})`,
    }
    
    return (
      <div className="main__home" style={homeBackground}>
        <div className="home__container">
          <Header></Header>
          <div className="booking__main">
            <div className="booking__text">
              <h1>{name}</h1>
              <p>
                {name} is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>
            </div>
            <div className="booking__book">
              <label htmlFor="">Orgin</label>
              <input type="text" />
              <label htmlFor="">Destination</label>
              <input type="text" />
              <div className="dateTime">
                <div className="bokking_form">
                  <label htmlFor="">From</label>
                  <DatePicker onChange={onChange} value={value} />
                </div>
                <div className="bokking_to">
                  <label htmlFor="">To</label>
                  <DatePicker onChange={onChange1} value={value1} />
                </div>
              </div>
              <Link style={{textDecoration: 'none'}} to="/rooms">
                <button className="btn">Start Booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Booking;