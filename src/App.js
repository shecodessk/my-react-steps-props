import TiktokListItems from "./TiktokListItems.js";
import Button from "./Button.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Hello Clarice</h1>
      <h2>A Summary of TikTok Videos I've Watch</h2>
      <TiktokListItems />
      <h3>Which one is your favorite?</h3>

      <Button name="#1" />
      <Button name="#2" />
      <Button name="#3" />

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
    </>
  );
}

export default App;
