import { Route, Routes } from "react-router"
import Login from "./Componats/Login"
import Registration from "./Componats/Registration"
import Home from "./pages/Home"
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDash";


function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route
          path="/Home"
          element={user && !user.isAdmin ? <Home /> : <Login />}
        />
        <Route path="/Cart" element={user && !user.isAdmin ? <Cart /> : <Login />}/>
        <Route
          path="/admin-Dashboard"
          element={user && user.isAdmin ? <AdminDashboard /> : <Login />}
        />
      </Routes>
    </>
  )
}

export default App
