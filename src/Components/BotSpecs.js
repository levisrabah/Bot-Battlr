import React from "react";
import { useHistory } from "react-router-dom";

function BotSpecs({ bot, enlistBot }) {
  const history = useHistory();

  const handleEnlist = () => {
    enlistBot(bot); // Call the enlistBot function passed as prop
    history.push("/"); // Redirect to the list view after enlisting the bot
  };

  return (
    <div className="ui segment">
      {/* Bot details */}
      <button onClick={() => history.goBack()}>Go Back</button>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
