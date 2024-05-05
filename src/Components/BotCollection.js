import React from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar"; // Import the SortBar component

const SortOptions = {
  HEALTH: "health",
  DAMAGE: "damage",
  ARMOR: "armor",
};

function BotCollection({ bots, enlistBot, deleteBot }) {
  const [sortCriteria, setSortCriteria] = React.useState(SortOptions.HEALTH); // Initial sort criteria

  const sortedBots = React.useMemo(() => {
    // Sort bots based on the selected criteria
    return [...bots].sort((a, b) => {
      if (sortCriteria === "health") {
        return b.health - a.health; // Descending order for health
      } else if (sortCriteria === "damage") {
        return b.damage - a.damage; // Descending order for damage
      } else if (sortCriteria === "armor") {
        return b.armor - a.armor; // Descending order for armor
      }
      return 0; // No sorting (maintain original order)
    });
  }, [bots, sortCriteria]); // Re-sort when bots or sortCriteria changes

  const handleSortChange = (newSortCriteria) => {
    setSortCriteria(newSortCriteria);
  };

  return (
    <div className="ui four column grid">
      <SortBar onSortChange={handleSortChange} />
      <div className="row">
        {sortedBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={enlistBot}
            deleteBot={deleteBot}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
