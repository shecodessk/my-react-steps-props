import TiktokListItems from "./TiktokListItems.js";
import Button from "./Button.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import About from "./components/About.js";
import Navigation from "./components/Navigation.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <h1>Hello Clarice</h1>
      <h2>A Summary of TikTok Videos I've Watch</h2>
      <TiktokListItems />
      <h3>Which one is your favorite?</h3>

      <Button name="#1" />
      <Button name="#2" />
      <Button name="#3" />

      <Route path="/home" component={Home}></Route>
      <Route path="/users" component={Users}></Route>
      <Route path="/about-me" component={About}></Route>
    </>
  );
}

export default App;
