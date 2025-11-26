import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Rides() {
  const [results, setResults] = useState([]);

  const handleSearch = (criteria) => {
    console.log("Recherche envoyée :", criteria);

    // Simuler des résultats (en attendant le backend)
    const fakeResults = [
      {
        id: 1,
        driver: "Alice",
        depart: criteria.depart,
        arrivee: criteria.arrivee,
        date: criteria.date,
        price: 12,
      },
      {
        id: 2,
        driver: "Bob",
        depart: criteria.depart,
        arrivee: criteria.arrivee,
        date: criteria.date,
        price: 10,
      },
    ];

    setResults(fakeResults);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-[#2e7d32] mb-6">
        🔍 Recherche de covoiturages
      </h1>

      <SearchBar onSearch={handleSearch} />

      {/* Affichage des résultats */}
      <div className="mt-10 grid gap-6">
        {results.length === 0 ? (
          <p className="text-gray-600">Aucun résultat pour le moment.</p>
        ) : (
          results.map((ride) => (
            <div
              key={ride.id}
              className="bg-white shadow-lg p-5 rounded-xl border"
            >
              <p><strong>Conducteur :</strong> {ride.driver}</p>
              <p><strong>Départ :</strong> {ride.depart}</p>
              <p><strong>Arrivée :</strong> {ride.arrivee}</p>
              <p><strong>Date :</strong> {ride.date}</p>
              <p><strong>Prix :</strong> {ride.price} €</p>

              <button className="mt-3 bg-[#2e7d32] text-white px-4 py-2 rounded-lg">
                Voir le trajet
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Rides;
