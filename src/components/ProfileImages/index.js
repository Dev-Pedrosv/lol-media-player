import * as C from "./styles";

import { profileImages } from "./profile-images";
export function ProfileImages({ onClickOn }) {
  return (
    <C.Container>
      {profileImages.map((element) => (
        <div onClick={() => onClickOn(element)}>
          <img key={element.id} src={element.image} alt={element.name} />
          <C.Name>{element.name}</C.Name>
        </div>
      ))}
    </C.Container>
  );
}
