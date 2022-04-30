import * as C from "./styles";
import { wallpapers } from "./wallpapers";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export function Wallpapers() {
  return (
    <C.Container>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {wallpapers.map((element) => (
          <img src={element.image} alt={element.name} key={element.id}></img>
        ))}
      </Carousel>
    </C.Container>
  );
}
