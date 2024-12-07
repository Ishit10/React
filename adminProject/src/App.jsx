

import Login from "./componats/Login"
import { Route, Router, Routes } from "react-router"
import Rigistration from "./componats/Rigistration"

import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDash";
import NavBar from "./componats/NavBar";




function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    
      <NavBar/>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Dashboard"
          element={user && !user.isAdmin ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin-Dashboard"
          element={user && user.isAdmin ? <AdminDashboard /> : <Login />}
        />
        <Route path="/registration" element={<Rigistration />} />
      </Routes>
     
      

      
    </>
  )
}

export default App
