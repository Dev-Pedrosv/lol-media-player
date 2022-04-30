import { useEffect } from "react";

import * as C from "./styles";
import { Header } from "../../components/Header";
import { Wallpapers } from "../../components/Wallpapers";
import { MediaPlayer } from "../../components/MediaPlayer";
import dravenAudio from "../../assets/audio/draven-audio.mp3";

export function MusicPlayer() {
  const sound = new Audio(dravenAudio);

  useEffect(() => {
    sound.play();
  }, []);

  return (
    <C.Container>
      <Header isProfile={true} />
      <Wallpapers />
      <MediaPlayer />
    </C.Container>
  );
}
