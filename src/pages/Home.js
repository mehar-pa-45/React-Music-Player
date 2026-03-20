import React from "react";
import songs from "../data/songs";
import SongCard from "../components/SongCard";

function Home({ setCurrentSong }) {
  return (
    <div>
      <h2>Trending Songs</h2>

      <div className="grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onPlay={setCurrentSong} />
        ))}
      </div>
    </div>
  );
}

export default Home;
