import { createSlice } from "@reduxjs/toolkit";

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: {
    rooms: [],
    reservations: [],
    user: null
  },
  reducers: {
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cancelReservation: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    }
  }
});

export const { setRooms, setReservations, setUser, cancelReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
