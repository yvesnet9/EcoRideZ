import { useState } from "react";

function SearchBar({ onSearch }) {
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ depart, arrivee, date });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        type="text"
        placeholder="Ville de départ"
        className="p-3 border rounded-lg"
        value={depart}
        onChange={(e) => setDepart(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ville d’arrivée"
        className="p-3 border rounded-lg"
        value={arrivee}
        onChange={(e) => setArrivee(e.target.value)}
      />

      <input
        type="date"
        className="p-3 border rounded-lg"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#2e7d32] text-white rounded-lg px-4 py-3 hover:bg-[#1b5e20] transition"
      >
        🔍 Rechercher
      </button>
    </form>
  );
}

export default SearchBar;
