import * as C from "./styles";
import { Header } from "../../components/Header";
import { Wallpapers } from "../../components/Wallpapers";
import { MediaPlayer } from "../../components/MediaPlayer";

export function MusicPlayer() {
  return (
    <C.Container>
      <Header isProfile={true} />
      <Wallpapers />
      <MediaPlayer />
    </C.Container>
  );
}
