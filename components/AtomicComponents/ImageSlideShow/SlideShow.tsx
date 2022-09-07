import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function SlideShow() {
  return (
    <div style={{ width: "100vw" }}>
      <Splide
        options={{
          type: "loop",
          mediaQuery: "min",
          gap: "10px",
          drag: "free",
          // arrows: false,
          pagination: false,
          perPage: 3,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
          height: "35vh",
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/javascript.png"
              alt="javascript"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/typescript.png"
              alt="typescript"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/react.jpg"
              alt="react"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/htmlnew.png"
              alt="hmtl"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/css.png"
              alt="css"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/python.png"
              alt="python"
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default SlideShow;
