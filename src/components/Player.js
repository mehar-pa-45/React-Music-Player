import React, { useEffect, useRef } from "react";

function Player({ currentSong }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  return (
    <div>
      <h3>Now Playing</h3>

      {currentSong ? (
        <div>
          <p>{currentSong.title} - {currentSong.artist}</p>
          <audio ref={audioRef} controls />
        </div>
      ) : (
        <p>Select a song</p>
      )}
    </div>
  );
}

export default Player;
