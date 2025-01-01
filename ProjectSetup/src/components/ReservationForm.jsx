import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./ReservationForm.css"; 

const ReservationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const room = location.state?.room;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleReservation = () => {
    const reservation = {
      name,
      email,
      roomId: room.id,
      roomName: room.name,
      roomType: room.type,
      price: room.price,
      checkInDate,
      checkOutDate,
    };

    axios
      .post("http://localhost:3000/reservations", reservation)
      .then((response) => {
        console.log("Reservation confirmed:", response.data);
        alert("Reservation confirmed!");
        navigate("/reservations");
      })
      .catch((error) => {
        console.error("Error confirming reservation:", error);
        alert("Error confirming reservation. Please try again later.");
      });
  };

  return (
    <div className="reservation-form-container">
      <div className="reservation-form-card">
        <h2 className="form-title">Reservation Form</h2>
        <div className="room-details">
          <h3>{room.name}</h3>
          <p className="room-type">{room.type}</p>
          <p className="room-price">Price: ${room.price} per night</p>
        </div>
        <form className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Check-in Date:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Check-out Date:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <button type="button" className="btn-confirm" onClick={handleReservation}>
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
