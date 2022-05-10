/* eslint-disable use-isnan */
import { useState, useRef, useEffect } from "react";
import * as C from "./styles";
import { playList } from "../../constants/playList";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlineEllipsis,
  AiOutlinePauseCircle,
} from "react-icons/ai";

export function MediaPlayer({ onClick, music }) {
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
    if (music) {
      setIndex(music);
      togglePlayPause();
    }
  }, [music]);

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
    const isPlay = type;
    setIsPlaying(isPlay);
    if (isPlay) {
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
      handleMusic();
    }
    if (
      audioPlayer.current.currentTime === audioPlayer.current.duration &&
      index === playList.length - 1
    ) {
      handleMusic();
    }
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--before-width', `${(progressBar.current.value / duration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };

  const playMusic = () => {
    cancelAnimationFrame(animationRef.current);
    setTimeout(() => {
      setLoading(false);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }, 3000);
  };

  const handleMusic = (type) => {
    if (type === "previous") {
      setIndex(index - 1);
      if (isPlaying) {
        setLoading(true);
        playMusic();
      }
      return;
    }
    if (index === playList.length - 1) {
      setIndex(0);
      if (isPlaying) {
        setLoading(true);
        playMusic();
      }
      return;
    }
    if (index < playList.length - 1) {
      setIndex(index + 1);
      console.log(isPlaying);

      if (isPlaying) {
        console.log("aqui");
        setLoading(true);
        playMusic();
      }

      return;
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
          <>
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

            <p className="index">
              <span>{index + 1}</span> / {playList.length}
            </p>
          </>
        )}
        {loading && (
          <C.Gif
            className="gif"
            alt="gif-loading"
            src="https://developer.riotgames.com/static/img/katarina.55a01cf0560a.gif"
          />
        )}

        <AiOutlineEllipsis onClick={onClick} />
      </C.ContainerMenu>
    </C.Container>
  );
}
