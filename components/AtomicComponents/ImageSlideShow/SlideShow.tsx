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
          // type: "loop",
          mediaQuery: "min",
          // gap: "5px",
          drag: "free",
          // arrows: false,
          pagination: false,
          perPage: 2,
          breakpoints: {
            552: {
              perPage: 3,
            },

            1000: {
              perPage: 4,
            },
          },
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
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/typescript.png"
              alt="typescript"
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/react.jpg"
              alt="react"
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/htmlnew.png"
              alt="hmtl"
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/css.png"
              alt="css"
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div style={{ width: "25%" }}>
            <Image
              src="/python.png"
              alt="python"
              width={200}
              height={200}
              layout={"responsive"}
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default SlideShow;
