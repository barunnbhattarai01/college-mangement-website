import Navbar from "./nav"
import Slideshow from "./slider"
import About from "./about"
import { Outlet } from "react-router-dom"
import Footer from "./footer"


function App() {
 



  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
   
  )
}

export default App
