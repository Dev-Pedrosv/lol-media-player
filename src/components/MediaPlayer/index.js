/* eslint-disable use-isnan */
import { useState, useRef, useEffect } from "react";
import * as C from "./styles";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlineEllipsis,
  AiOutlinePauseCircle,
} from "react-icons/ai";

export function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, setPlay] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [widthProgressBar, setWidthProgressBar] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      const seconds = Math.floor(audioPlayer?.current?.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }, 1000);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = (type) => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      setPlay(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setWidthProgressBar(`${(progressBar.current.value / duration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  const handleMusicChange = () => {};

  return (
    <C.Container>
      <C.ContainerNameMusic>
        <p className="music">Warrior</p>
        <p className="description">RIOT GAMES FT. IMAGINE DRAGONS</p>
      </C.ContainerNameMusic>
      <C.ContainerControls>
        <AiOutlineLeft />
        {isPlaying ? (
          <AiOutlinePauseCircle className="control" onClick={togglePlayPause} />
        ) : (
          <AiOutlinePlayCircle className="control" onClick={togglePlayPause} />
        )}
        <AiOutlineRight />
      </C.ContainerControls>

      <C.ContainerMenu widthProgressBar={widthProgressBar}>
        <input
          ref={progressBar}
          defaultValue="0"
          className="progressBar"
          type="range"
          onChange={changeRange}
        />
        <audio
          style={{ display: "none" }}
          ref={audioPlayer}
          src="https://s170.123apps.com/aconv/d/s1709MXzFUZ1_mp3_nzrRHgrq.mp3"
          preload="metadata"
          controls
        ></audio>

        {play && (
          <div className="progressTime">
            <p>
              {`${calculateTime(currentTime)} / 
            ${
              duration && !isNaN(duration)
                ? calculateTime(duration)
                : calculateTime(currentTime)
            }`}
            </p>
          </div>
        )}

        <AiOutlineEllipsis />
      </C.ContainerMenu>
    </C.Container>
  );
}
