import { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];

function Searchbar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button
            className={query.type === type ? "active" : ""}
            key={index}
            type={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="Search by city" />
        <input
          type="number"
          name="minPrice"
          placeholder="min price"
          min={0}
          max={100000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="max price"
          min={0}
          max={100000}
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
