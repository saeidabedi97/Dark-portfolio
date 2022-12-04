import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// interface contentTypes {
//    { title: string; body: string; img: string };
//   card2: { title: string; body: string; img: string };
//   card3: { title: string; body: string; img: string };
//   card4: { title: string; body: string; img: string };
//   card5: { title: string; body: string; img: string };
//   card6: { title: string; body: string; img: string };
//   card7: { title: string; body: string; img: string };
// }

function SlideShow() {
  const slideContent = [
    {
      title: "JavaScript",
      body: "I use JavaScript to make interactive websites.",
      img: "/javascript.png",
    },
    {
      title: "TypeScript",
      body: "Sometimes to make my code more organized and type safe i use TypeScript.",
      img: "/typescript.png",
    },
    {
      title: "React",
      body: "Every Frontender must know a framework or library to create interactive websites.",
      img: "/react.jpg",
    },
    {
      title: "Html",
      body: "The markup langauge to describe the content of the website. ",
      img: "/htmlnew.png",
    },
    {
      title: "CSS",
      body: "The building block and styling of any website.  ",
      img: "/css.png",
    },
    {
      title: "VueJs",
      body: "A framework with very well syntax to develop websites.  ",
      img: "/vue.png",
    },
    {
      title: "NextJs",
      body: "A framework for React which has more features.  ",
      img: "/next.png",
    },
  ];

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
          height: "250px",
        }}
        extensions={{ AutoScroll }}
      >
        {slideContent.map((item: any, index) => {
          return (
            <SplideSlide key={index}>
              <div
                style={{
                  position: "relative",
                  top: "50px",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "15px" }}
                >
                  <Image
                    src={item.img}
                    alt="icon"
                    width={85}
                    height={85}
                  ></Image>
                  <h1>{item.title}</h1>
                </div>
                <div>
                  <p>{item.body}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default SlideShow;
