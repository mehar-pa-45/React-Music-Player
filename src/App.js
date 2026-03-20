import React, { useState } from "react";
import Home from "./pages/Home";
import Player from "./components/Player";
import "./App.css";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="app">
      <Home setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
