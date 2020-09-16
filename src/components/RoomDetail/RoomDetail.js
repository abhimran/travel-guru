import React from 'react';
import star from '../../images/Icon/star_1_.png'
import './RoomDetail.css'

const RoomDetail = (props) => {
    const {heading,totalRooms,kitchen,flexibility,rating,price,photo} = props.room;
    return (
        <div className="roomDetail">
            <div className="roomDetail__img">
                <img src={photo} alt=""/>
            </div>
            <div className="roomDetail__info">
                <h3>{heading}</h3>
                <p>{totalRooms}</p>
                <p>{kitchen}</p>
                <p>{flexibility}</p>
                <div className="ratingCost">
                    <div className="rating">
                        <img src={star} alt=""/>
                         <p>{rating}(20)</p>
                    </div>
                    <div className="cost">
                        <p>${price}/night</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;