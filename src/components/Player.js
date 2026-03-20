import React, { useRef, useEffect } from "react";

function Player({ currentSong }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentSong]);

  return (
    <div className="player">
      {currentSong && (
        <>
          <img src={currentSong.cover} alt="" width="50" />
          <div>
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist}</p>
          </div>
        </>
      )}

      <audio ref={audioRef} controls>
        <source src={currentSong?.url} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Player;
