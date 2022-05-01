/* eslint-disable use-isnan */
import { useState, useRef, useEffect } from "react";
import * as C from "./styles";
import { playList } from "./playList";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlineEllipsis,
  AiOutlinePauseCircle,
} from "react-icons/ai";

export function MediaPlayer() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
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
    setIsPlaying(type);
    if (type) {
      setPlay(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      return;
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      return;
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
    if (
      audioPlayer.current.currentTime === audioPlayer.current.duration &&
      index < playList.length - 1
    ) {
      continuePlayList();
    }
    if (
      audioPlayer.current.currentTime === audioPlayer.current.duration &&
      index === playList.length - 1
    ) {
      continuePlayList();
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setWidthProgressBar(`${(progressBar.current.value / duration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  const continuePlayList = () => {
    if (index === playList.length - 1) {
      setIndex(0);
      setLoading(true);
      cancelAnimationFrame(animationRef.current);
      setTimeout(() => {
        setLoading(false);
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }, 3000);
    }
    if (index < playList.length - 1) {
      setLoading(true);
      cancelAnimationFrame(animationRef.current);
      setIndex(index + 1);
      setTimeout(() => {
        setLoading(false);
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }, 3000);
    }
  };

  const handleMusic = (type) => {
    if (type === "previous") {
      setIndex(index - 1);
      togglePlayPause();
    } else {
      setIndex(index + 1);
      togglePlayPause();
    }
  };

  return (
    <C.Container>
      <C.ContainerNameMusic>
        <p className="music">{playList[index].name}</p>
        <p className="description">{playList[index].description}</p>
      </C.ContainerNameMusic>
      <C.ContainerControls>
        <C.Button
          disabled={index === 0}
          onClick={() => handleMusic("previous")}
        >
          <AiOutlineLeft className={index === 0 ? "disabled" : "active"} />
        </C.Button>
        {isPlaying ? (
          <AiOutlinePauseCircle
            className="control active"
            onClick={() => togglePlayPause(false)}
          />
        ) : (
          <AiOutlinePlayCircle
            className="control active"
            onClick={() => togglePlayPause(true)}
          />
        )}
        <C.Button
          disabled={index === playList.length - 1}
          onClick={() => handleMusic("next")}
        >
          <AiOutlineRight
            className={index === playList.length - 1 ? "disabled" : "active"}
          />
        </C.Button>
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
          src={playList[index].mp3}
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
        {loading && (
          <img
            alt="gif-loading"
            src="https://developer.riotgames.com/static/img/katarina.55a01cf0560a.gif"
            style={{
              position: "absolute",
              width: "73px",
              right: "47vw",
              bottom: "50vh",
            }}
          />
        )}

        <AiOutlineEllipsis />
      </C.ContainerMenu>
    </C.Container>
  );
}
