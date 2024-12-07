import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home";
import About from "./pages/About";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[{
        path:"/About",
        element:<About/>,
       
      }],
      
      
    },
 
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
