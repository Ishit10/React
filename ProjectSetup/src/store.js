import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./features/reservationsSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
