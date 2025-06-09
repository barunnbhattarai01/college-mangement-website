import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,  RouterProvider,Route,createRoutesFromElements}  from "react-router-dom"
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
  createRoutesFromElements(
    <>
    
     <Route path='/' element={<><Login/><Footer/></>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/' element={<App/>}>
      <Route path='/home' element={<About/>}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/images' element={<Photo/>}/>

     </Route>
    
    
    
    </>
  )

  
  )



createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>    
  </StrictMode>,
)
