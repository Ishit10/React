import { Route, Routes } from "react-router-dom"
import Home from "./componets/Home"
import Create from "./componets/Create"
import Read from "./componets/Read"
import Update from "./componets/Update"


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Read/:userId" element={<Read />} />
        <Route path="/Update/:id" element={<Update />} />

      </Routes>
    </>
  )
}

export default App
