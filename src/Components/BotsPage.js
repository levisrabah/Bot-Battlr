import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection"; 
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]); // State for selected classes
  const [isLoading, setIsLoading] = useState(true); // Track data fetching state

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
        setIsLoading(false); // Mark data fetching complete
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
        setIsLoading(false); // Indicate error during fetching
      });
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function deleteBot(bot) {
    setBots(bots.filter((b) => b.id !== bot.id));
  }

  const handleClassChange = (event) => {
    const newSelectedClasses = [...selectedClasses];
    if (event.target.checked) {
      newSelectedClasses.push(event.target.value);
    } else {
      const index = newSelectedClasses.indexOf(event.target.value);
      newSelectedClasses.splice(index, 1);
    }
    setSelectedClasses(newSelectedClasses);
  };

  const sortedBots = React.useMemo(() => {
    // Sort and filter bots based on criteria and selected classes
    return [...bots]
      .sort((a, b) => {
       
        return 0; 
      })
      .filter(
        (bot) =>
          selectedClasses.length === 0 ||
          selectedClasses.includes(bot.bot_class)
      );
  }, [bots, selectedClasses]); 

  return (
    <div>
      <div>
        <h4>Filter by Class:</h4>
        <input
          type="checkbox"
          value="Support"
          onChange={handleClassChange}
        />{" "}
        Support<br />
        <input
          type="checkbox"
          value="Medic"
          onChange={handleClassChange}
        />{" "}
        Medic<br />
        <input
          type="checkbox"
          value="Witch"
          onChange={handleClassChange}
        />{" "}
        Witch<br />
        <input
          type="checkbox"
          value="Defender"
          onChange={handleClassChange}
        />{" "}
        Defender<br />
        <input
          type="checkbox"
          value="Assault"
          onChange={handleClassChange}
        />{" "}
        Assault<br />
      </div>
      
      {isLoading ? (
        <p>Loading bots...</p>
      ) : (
        <>
          <YourBotArmy
            bots={bots.filter((b) => b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
          />
          <BotCollection
            bots={sortedBots}
            enlistBot={enlistBot}
            deleteBot={deleteBot}
          />
        </>
      )}
    </div>
  );
}

export default BotsPage;
