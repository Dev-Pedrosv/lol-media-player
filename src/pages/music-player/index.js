import { useState, useEffect } from "react";

import * as C from "./styles";
import { Header } from "../../components/Header";
import { Wallpapers } from "../../components/Wallpapers";
import { MediaPlayer } from "../../components/MediaPlayer";
import { PlayList } from "../../components/PlayList";
import { store } from "../../facilities/store";

export function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState(0);
  const [user, setUser] = useState({});

  const handleMusic = (element) => {
    setMusic(element.id - 1);
    setOpen(false);
  };

  const closeList = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUser(store.getStorage("user"));
  }, []);

  return (
    <C.Container>
      <Header isProfile={true} nickName={user.name} />
      <Wallpapers />
      <MediaPlayer music={music} onClick={() => setOpen(!open)} />
      {open && (
        <PlayList
          onClick={(element) => handleMusic(element)}
          closeList={() => closeList()}
        />
      )}
    </C.Container>
  );
}
