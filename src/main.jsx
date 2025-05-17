import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,  RouterProvider}  from "react-router-dom"
import Footer from './footer.jsx'
import Navbar from './nav.jsx'
import Event from './event.jsx'
import Slideshow from './slider.jsx'
import { BrowserRouter } from 'react-router-dom'
import About from './about.jsx'
import Course from './course/course.jsx'
import Contact from './contact/contact.jsx'
import Photo from './photo.jsx'
import Login from './course/login.jsx'
import Signup from './course/signup.jsx'

 
const router =createBrowserRouter(
  [
 {
  path:"/",
  element:<><Login/><Footer/></>
  },


  {
  path:"/home",
  element:<><Navbar/><About/><Footer/></>
  },
  {
  path:"/event",
  element:<><Navbar/><Event/><Footer/></>
  },
  {
    path:"/course",
    element:<><Navbar/><Course/><Footer/></>
  },
  {
    path:"/contact",
    element:<><Navbar/><Contact/><Footer/></>
  },
  {
    path:"/images",
    element:<><Navbar/><Photo/><Footer/></>
  },
  {
    path:"/signup",
    element:<><Signup/></>
  }

  
  
  ]
  
  )



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>    
  </StrictMode>,
)
