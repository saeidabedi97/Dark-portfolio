import { motion, useAnimation } from "framer-motion";
import LazyLoad from "react-lazyload";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  Button,
  Heading2,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import "react-lazy-load-image-component/src/effects/blur.css";
import st from "../../../styles/section.module.scss";
import s from "../ProjectSection/ProjectSection.module.scss";

const projectContent = [
  {
    videoSrc: "/lamborghini.mp4",
    body: "3D model of an Lamborghini created with react three fiber library. There is interactions such as openning and closing the door and changing the color.",
    progressJSValue: 86.1,
    progressHtmlValue: 9.3,
    progressCssValue: 4.6,
  },
  {
    videoSrc: "/Noga.mp4",
    body: "A landing page for my start up created with vanilla JavaScript, Html and CSS. This website is really optimized for performance and SEO.",
    progressJSValue: 12.9,
    progressHtmlValue: 62.3,
    progressCssValue: 24.8,
  },
  {
    videoSrc: "/wordle.mp4",
    body: "A cloned game of wordle created in react. In this game you should guess the word.",
    progressJSValue: 74.6,
    progressHtmlValue: 12.4,
    progressCssValue: 13.0,
  },
  {
    videoSrc: "/valorant.mp4",
    body: "A website where you can find informations about agents, maps and weapons in valorant. Created with Vue. ",
    progressJSValue: 82.6,
    progressHtmlValue: 16.9,
    progressCssValue: 0.5,
  },
  {
    videoSrc: "/TicTacToe.mp4",
    body: "Simple TicTacToe game created in React and JavaScript. This was my first project in React. ",
    progressJSValue: 82.6,
    progressHtmlValue: 16.9,
    progressCssValue: 0.5,
  },
];

export default function ProjectSection({ projectSection = [] }) {
  const transitionToRight = {
    start: { x: -100, opacity: 0 },
    end: { x: 0, opacity: 1 },
  };

  const transitionToLeft = {
    start: {
      x: 100,
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className={st.section}>
      <>
        <div className={s.ps__heading__container} id="projects">
          <Heading2 className={st.section__heading}>Projects</Heading2>
        </div>
        {projectContent.map((data, index) => {
          return (
            <div className={s.ps__details} key={index}>
              <div className={s.ps__details__card1}>
                <LazyLoad once offset={100}>
                  <div className={s.ps__details__card1__figure__container}>
                    <motion.video
                      width="420"
                      height="240"
                      controls={false}
                      autoPlay={true}
                      muted
                      loop
                      preload="none"
                      ref={ref}
                      variants={transitionToRight}
                      initial="start"
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <source src={data.videoSrc} type="video/mp4" />
                    </motion.video>
                  </div>
                </LazyLoad>
                <motion.div
                  className={s.ps__details__card1__text__container}
                  ref={ref}
                  initial="start"
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  variants={transitionToLeft}
                >
                  <PSmall>{data.body}</PSmall>
                  <ProgressBar>
                    <ProgressBar
                      striped
                      variant="green"
                      now={data.progressJSValue}
                      key={1}
                    />
                    <ProgressBar
                      variant="warning"
                      now={data.progressCssValue}
                      key={2}
                    />
                    <ProgressBar
                      striped
                      variant="danger"
                      now={data.progressHtmlValue}
                      key={3}
                    />
                  </ProgressBar>
                  <div className={s.ps__details__card1__progress}>
                    <PSmall className={s.ps__details__card1__progress__label1}>
                      JavaScript
                    </PSmall>
                    <PSmall className={s.ps__details__card1__progress__label2}>
                      css
                    </PSmall>
                    <PSmall className={s.ps__details__card1__progress__label3}>
                      html
                    </PSmall>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </>
    </section>
  );
}
