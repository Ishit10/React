
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./componets/home";
import About from "./componets/About";
import Services from "./componets/Services";
import Contact from "./componets/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
]);



function App() {


  return (
    <>
      
      <RouterProvider router={router} />
     
    </>
  )
}

export default App
