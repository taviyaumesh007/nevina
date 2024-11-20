import React, { useState } from 'react';

const MusicPlaylist = () => {
  const [playlists, setPlaylists] = useState([
    { name: 'Ronald rich playlist', isPlaying: true },
    { name: 'Ronald rich playlist', isPlaying: false },
  ]);

  const togglePlay = (index) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist, idx) =>
        idx === index ? { ...playlist, isPlaying: !playlist.isPlaying } : playlist
      )
    );
  };

  const deletePlaylist = (index) => {
    setPlaylists((prevPlaylists) => prevPlaylists.filter((_, idx) => idx !== index));
  };

  return (
    <div className="music-container">
      <h2>Music</h2>
      {playlists.map((playlist, index) => (
        <div key={index} className="playlist-item">
          <span>{playlist.name}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={playlist.isPlaying}
              onChange={() => togglePlay(index)}
            />
            <span className="slider"></span>
          </label>
          <button className="delete-button" onClick={() => deletePlaylist(index)}>
            🗑️
          </button>
        </div>
      ))}
      <div style={{display:'flex',justifyContent:"center"}}>

      <button className="share-button">
        <span>Share</span>
      </button>
      </div>
    </div>
  );
};

export default MusicPlaylist;
