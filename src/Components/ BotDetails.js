
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the botId from the URL

function BotDetails({ bots }) {
  const { botId } = useParams(); // Get the botId from the URL params

  const bot = bots.find((b) => b.id === parseInt(botId)); // Find the bot with the matching ID

  if (!bot) {
    return <p>Bot not found!</p>;
  }

  return (
    <div>
      {/* Display bot details */}
      <h1>{bot.name}</h1>
      <h2>Class: {bot.bot_class}</h2>
      <p>Catchphrase: {bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Created at: {bot.created_at}</p>
      <p>Updated at: {bot.updated_at}</p>
    </div>
  );
}

export default BotDetails;
