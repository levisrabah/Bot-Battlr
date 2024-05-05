
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BotsPage from "./BotsPage"; // Import the BotsPage component
import BotDetails from "./BotDetails"; // Import the BotDetails component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BotsPage} />
        <Route path="/bots/:botId" component={BotDetails} /> {/* BotDetails route */}
      </Switch>
    </Router>
  );
}

export default App;
