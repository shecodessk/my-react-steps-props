import TiktokListItems from "./TiktokListItems.js";
import Button from "./Button.js";
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
    </>
  );
}

export default App;
