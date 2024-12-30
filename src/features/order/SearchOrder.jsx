import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Search Order....."
          value={query}
          className="w-28 rounded-full border-2 bg-yellow-100 px-4 py-2 text-xs transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
