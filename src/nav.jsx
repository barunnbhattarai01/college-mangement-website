import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar(){


return(
<>
<div className="flex justify-around text-xl  md:text-3xl bg-amber-300 h-24 text-black items-center ">
<div className="">Apex College</div>

    <nav className=" flex justify-around w-4xl">
    <Link to="/home" className="hover:rounded-4xl hover:bg-amber-500">Home</Link>
    <Link to="/event"className="hover:bg-amber-500 hover:rounded-4xl">Event</Link>
    <Link to="/course" className="hover:bg-amber-500 hover:rounded-4xl">Almuni</Link>
    <Link to="/contact" className="hover:bg-amber-500 hover:rounded-4xl">Contact</Link>
    </nav>
</div>



</>



)

}




export default Navbar;