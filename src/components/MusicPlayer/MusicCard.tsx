import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { tracks } from './tracks';
import { useAudio } from './useAudio';
import type { Track } from './types';

export default function MusicCard() {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const {
    playing,
    muted,
    audioLoaded,
    error,
    togglePlay,
    toggleMute,
    changeTrack
  } = useAudio(currentTrack);

  const handleTrackChange = (track: Track) => {
    setCurrentTrack(track);
    changeTrack(track);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Relaxing Sounds</h2>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tracks.map((track) => (
          <button
            key={track.id}
            onClick={() => handleTrackChange(track)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              currentTrack.id === track.id
                ? 'bg-purple-500 text-white'
                : 'bg-white/50 hover:bg-white/90'
            }`}
          >
            <span>{track.icon}</span>
            {track.name}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={togglePlay}
          disabled={!audioLoaded}
          className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {playing ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={toggleMute}
          disabled={!audioLoaded}
          className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>
    </div>
  );
}