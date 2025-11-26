import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-[#2e7d32]">
        EcoRideZ
      </Link>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><Link to="/" className="hover:text-[#2e7d32]">Accueil</Link></li>
        <li><Link to="/rides" className="hover:text-[#2e7d32]">Covoiturages</Link></li>
        <li><Link to="/login" className="hover:text-[#2e7d32]">Connexion</Link></li>
        <li><Link to="/contact" className="hover:text-[#2e7d32]">Contact</Link></li>
      </ul>

      {/* Bouton mobile */}
      <button 
        className="md:hidden text-gray-700 text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu mobile */}
      {open && (
        <ul className="absolute top-20 right-6 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden">
          <li><Link to="/" className="hover:text-[#2e7d32]" onClick={() => setOpen(false)}>Accueil</Link></li>
          <li><Link to="/rides" className="hover:text-[#2e7d32]" onClick={() => setOpen(false)}>Covoiturages</Link></li>
          <li><Link to="/login" className="hover:text-[#2e7d32]" onClick={() => setOpen(false)}>Connexion</Link></li>
          <li><Link to="/contact" className="hover:text-[#2e7d32]" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;
