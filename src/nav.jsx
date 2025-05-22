import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar(){

 /*const[theme,settheme]=React.useState("light");

  React.useEffect(()=>
  {
  if (theme==="light"){
    document.documentElement.classList.add("dark");
  }
  else{
    document.documentElement.classList.remove("dark")
  }



  },[theme] )


  const handlesubmit=()=>{
    settheme(theme==="light" ? "dark": "light")
  }*/

return(
<>
<div className="flex flex-wrap justify-between items-center px-4 md:px-12 h-24 bg-amber-300 text-black text-lg md:text-2xl">
  <div className="font-bold">Apex College</div>

  <nav className="flex flex-wrap justify-end items-center gap-x-4 md:gap-x-12">
    <Link to="/home" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Home</Link>
    <Link to="/event" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Event</Link>
    <Link to="/course" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Alumni</Link>
    <Link to="/contact" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Contact</Link>
  </nav>
</div>




</>



)

}




export default Navbar;