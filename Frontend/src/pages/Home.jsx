function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-10">

      {/* Présentation */}
      <section className="max-w-3xl text-center mb-10">
        <h2 className="text-4xl font-bold text-[#2e7d32] mb-4">
          🌱 Bienvenue sur EcoRideZ
        </h2>

        <p className="text-gray-700 text-lg">
          La plateforme de covoiturage écologique qui réduit l’impact carbone tout en facilitant vos déplacements.
          Voyagez mieux, voyagez vert.
        </p>
      </section>

      {/* Images */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car sharing 1"
          className="rounded-xl shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1493238792000-8113da705763"
          alt="Eco car"
          className="rounded-xl shadow-md"
        />

        <img
          src="https://images.unsplash.com/photo-1517940310602-1151a1d5d95f"
          alt="Green road"
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Formulaire de recherche */}
      <section className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl mb-10">
        <h3 className="text-2xl font-semibold text-[#2e7d32] mb-4">
          🔍 Trouver un itinéraire
        </h3>

        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Ville de départ"
            className="p-3 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Ville d’arrivée"
            className="p-3 border rounded-lg"
          />

          <input
            type="date"
            className="p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-[#2e7d32] text-white py-3 rounded-lg hover:bg-[#1b5e20] transition"
          >
            Rechercher
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10">
        <p>📧 eco@ecoridez.com</p>
        <a
          href="/mentions-legales"
          className="text-[#2e7d32] hover:underline"
        >
          Mentions légales
        </a>
      </footer>
    </div>
  );
}

export default Home;
