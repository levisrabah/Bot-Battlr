import React, { useState } from "react";

const SortOptions = {
  HEALTH: "health",
  DAMAGE: "damage",
  ARMOR: "armor",
};

function SortBar({ onSortChange }) {
  const [selectedSort, setSelectedSort] = useState(SortOptions.HEALTH);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    onSortChange(event.target.value); 
  };

  return (
    <div className="ui form">
      <div className="field">
        <label>Sort By:</label>
        <select value={selectedSort} onChange={handleSortChange}>
          <option value={SortOptions.HEALTH}>Health</option>
          <option value={SortOptions.DAMAGE}>Damage</option>
          <option value={SortOptions.ARMOR}>Armor</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;