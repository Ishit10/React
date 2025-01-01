
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import RoomList from './components/RoomList'
import ReservationList from './components/ReservationList'
import ReservationForm from './components/ReservationForm'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <Routes>
      
      <Route path="/rooms" element={<RoomList />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/reservation-form" element={<ReservationForm />} />
          
     
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      
      </div>
      <Footer/>
    </>
  )
}

export default App
