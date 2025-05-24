import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // For mobile hamburger icon

function Navbar() {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor="#1a202c"
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor="white"
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-12 h-24 bg-white shadow-lg text-black text-lg md:text-2xl relative">
        <div className="font-bold">Apex College</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-8">
          <Link to="/home" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Home</Link>
          <Link to="/event" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Event</Link>
          <Link to="/course" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Alumni</Link>
          <Link to="/contact" className="hover:bg-amber-500 px-3 py-1 rounded-xl">Contact</Link>
          <button onClick={toggleTheme} className="bg-white text-black px-3 py-1 rounded-xl hover:bg-gray-200 text-base">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="bg-white text-black px-2 py-1 rounded hover:bg-gray-200 text-sm">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="absolute top-24 left-0 w-full bg-amber-200 flex flex-col items-start gap-4 px-4 py-4 z-10 md:hidden text-base">
            <Link to="/home" className="w-full py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/event" className="w-full py-2" onClick={toggleMenu}>Event</Link>
            <Link to="/course" className="w-full py-2" onClick={toggleMenu}>Alumni</Link>
            <Link to="/contact" className="w-full py-2" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
