import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setReservations } from "../features/reservationsSlice";
import "./ReservationList.css"; 

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reservations")
      .then((response) => {
        dispatch(setReservations(response.data));
      })
      .catch((error) => console.error("Error fetching reservations:", error));
  }, [dispatch]);

  return (
    <div className="reservation-list-container">
      <h2 className="reservation-title">Your Reservations</h2>
      <div className="reservations-wrapper">
        {reservations && reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.id} className="reservation-card">
              <div className="reservation-header">
                <h3>{reservation.roomName}</h3>
                <p className="room-type">{reservation.roomType}</p>
              </div>
              <div className="reservation-details">
                <p>
                  <strong>Check-in:</strong> {reservation.checkInDate}
                </p>
                <p>
                  <strong>Check-out:</strong> {reservation.checkOutDate}
                </p>
                <p>
                  <strong>Total Price:</strong> ${reservation.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reservations">No reservations found.</p>
        )}
      </div>
    </div>
  );
};

export default ReservationList;
