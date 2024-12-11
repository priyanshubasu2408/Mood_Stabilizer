import { useState, useEffect, useRef } from 'react';
import type { Track } from './types';

export function useAudio(initialTrack: Track) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleCanPlay = () => setAudioLoaded(true);
    const handleError = () => {
      setError('Failed to load audio');
      setAudioLoaded(false);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.src = initialTrack.url;
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, [initialTrack.url]);

  const togglePlay = async () => {
    if (!audioRef.current || !audioLoaded) return;

    try {
      if (playing) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setPlaying(!playing);
      setError(null);
    } catch (err) {
      setError('Failed to play audio');
      console.error('Audio playback error:', err);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const changeTrack = async (track: Track) => {
    if (!audioRef.current) return;
    
    const wasPlaying = playing;
    audioRef.current.pause();
    setPlaying(false);
    setAudioLoaded(false);
    
    audioRef.current.src = track.url;
    audioRef.current.load();
    
    if (wasPlaying) {
      try {
        await audioRef.current.play();
        setPlaying(true);
        setError(null);
      } catch (err) {
        setError('Failed to play new track');
        console.error('Track change error:', err);
      }
    }
  };

  return {
    playing,
    muted,
    audioLoaded,
    error,
    togglePlay,
    toggleMute,
    changeTrack
  };
}