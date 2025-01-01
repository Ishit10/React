import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setRooms } from "../features/reservationsSlice";
import "./RoomList.css";
import aurika1 from '../assets/aurika1.jpg'


const RoomList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rooms = useSelector((state) => state.reservations.rooms);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((response) => {
        dispatch(setRooms(response.data));
      })
      .catch((error) => console.error("Error fetching rooms:", error));
  }, [dispatch]);

  const handleBookNowClick = (room) => {
    navigate("/reservation-form", { state: { room } });
  };

  return (
    <div >
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Hotel</h1>
          <p>Experience luxury and comfort like never before.</p>
          <button className="btn btn-hero" onClick={() => navigate("/rooms")}>
            Reserve Now
          </button>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At our hotel, we prioritize your comfort and satisfaction. With
            world-class amenities and top-notch services, we ensure your stay is
            unforgettable. From cozy rooms to exceptional dining options, we
            have it all.
          </p>
          <h3>Food and Dining</h3>
          <p>
            Mirasa is an all-day dining speciality restaurant that serves a gamut of regional and global fares in a grand setting.
            Ariva offers a comprehensive selection of the finest spirits, wines and innovative cocktails to lighten up your mood in an opulent setting.
          </p>
          <h3>Location & Surroundings</h3>
          <p>
            Aurika is located on a private hill at the centre of Udaipur, the City of Lakes. The hotel is close to several tourist attractions of Udaipur such as the City Palace of Udaipur and Bagore Ki Haveli.More than 50 travellers have appreciated the property's location during their stay here.
          </p>
        </div>
        <img
          src={aurika1} 
          alt="About Us"
          className="about-image"
        />
      </section>

      <section className="room-list">
        <h2 className="room-list-title">Rooms</h2>
        <div className="room-container">
          {rooms && rooms.length > 0 ? (
            rooms.map((room) => (
              <div key={room.id} className="room-card">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="room-image"
                />
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p>{room.type}</p>
                  <p>${room.price} per night</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleBookNowClick(room)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading rooms...</p>
          )}
        </div>
      </section>


    </div>
  );
};

export default RoomList;
