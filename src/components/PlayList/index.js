import * as C from "./styles";
import { playList } from "../../constants/playList";

export function PlayList({ onClick, open }) {
  return (
    <C.Container className={open ? "open" : ""}>
      {playList.map((element) => (
        <>
          <div
            className="container"
            key={element.id}
            onClick={() => onClick(element)}
          >
            <img src={element.image} alt={element.name} />
            <div className="info">
              <p className="music">{element.name}</p>
              <p className="description">{element.description}</p>
            </div>
          </div>
        </>
      ))}
    </C.Container>
  );
}
