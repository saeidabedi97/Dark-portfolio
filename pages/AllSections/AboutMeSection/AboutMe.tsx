import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Heading2,
  PMedium,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import { urlFor } from "../../../client";
import s from "../AboutMeSection/AboutMe.module.scss";
import st from "../../../styles/section.module.scss";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const transitionToRight = {
  start: { x: -100, opacity: 0 },
  end: { x: 0, opacity: 1 },
};
const transitionToLeft = {
  start: { x: 200, opacity: 0 },
  end: { x: 0, opacity: 1 },
};

export default function AboutMe({ aboutSection = [] }) {
  console.log(aboutSection);

  const text = aboutSection[0]?.body[0]?.children[0]?.text;
  const textArray = text?.split(".");
  // console.log(textArray);

  const control = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className={st.section}>
      {aboutSection &&
        aboutSection.map((post, index) => (
          <motion.div
            key={index}
            className={s.aboutMe__container}
            id="about"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Heading2 className={st.section__heading}>{post.title}</Heading2>
            <div className={s.aboutMe__content}>
              <motion.div
                className={s.aboutMe__imgContainer}
                ref={ref2}
                variants={transitionToRight}
                initial="start"
                animate={inView2 ? { x: 0, opacity: 1 } : ""}
                transition={{ duration: 1 }}
              >
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt="my picture"
                  layout={"responsive"}
                  className={s.aboutMe__img}
                  width={2898}
                  height={4096}
                />
              </motion.div>
              <motion.div
                className={s.aboutMe__txtContainer}
                ref={ref}
                variants={transitionToLeft}
                initial="start"
                animate={inView ? { x: 0, opacity: 1 } : ""}
                transition={{ duration: 1 }}
              >
                <PSmall>{textArray[0]}.</PSmall>
                <PSmall>{textArray[1]}.</PSmall>
                <PSmall>{textArray[2]}.</PSmall>
                <PSmall>{textArray[3]}.</PSmall>
              </motion.div>
            </div>
          </motion.div>
        ))}
    </section>
  );
}
