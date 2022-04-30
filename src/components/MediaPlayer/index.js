import { useState } from "react";
import * as C from "./styles";

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePlayCircle,
  AiOutlineEllipsis,
  AiOutlinePauseCircle,
} from "react-icons/ai";

export function MediaPlayer() {
  const [pause, setPause] = useState(false);

  return (
    <C.Container>
      <C.ContainerNameMusic>
        <p className="music">Warrior</p>
        <p className="description">RIOT GAMES FT. IMAGINE DRAGONS</p>
      </C.ContainerNameMusic>
      <C.ContainerControls>
        <AiOutlineLeft />
        {pause ? (
          <AiOutlinePauseCircle
            className="control"
            onClick={() => setPause(false)}
          />
        ) : (
          <AiOutlinePlayCircle
            className="control"
            onClick={() => setPause(true)}
          />
        )}
        <AiOutlineRight />
      </C.ContainerControls>
      <C.ContainerMenu>
        <AiOutlineEllipsis />
      </C.ContainerMenu>
    </C.Container>
  );
}
