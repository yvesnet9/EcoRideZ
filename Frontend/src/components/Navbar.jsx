function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#2e7d32]">
        EcoRideZ
      </h1>

      <ul className="flex gap-6 text-gray-700">
        <li>
          <a href="/" className="hover:text-[#2e7d32]">Accueil</a>
        </li>
        <li>
          <a href="/rides" className="hover:text-[#2e7d32]">Covoiturages</a>
        </li>
        <li>
          <a href="/login" className="hover:text-[#2e7d32]">Connexion</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-[#2e7d32]">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
