import React from "react";

function SongCard({ song, onPlay }) {
  return (
    <div className="card" onClick={() => onPlay(song)}>
      <img src={song.cover} alt="" />
      <h4>{song.title}</h4>
      <p>{song.artist}</p>
    </div>
  );
}

export default SongCard;
