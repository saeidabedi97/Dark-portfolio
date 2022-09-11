import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function SlideShow() {
  return (
    <div>
      <Splide
        options={{
          // type: "loop",
          mediaQuery: "min",
          gap: "55px",
          drag: "free",
          // arrows: false,
          pagination: false,
          perPage: 2,
          breakpoints: {
            552: {
              perPage: 3,
            },

            1000: {
              perPage: 5,
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
