import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heading2,
  PMedium,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../ExprienceSection/ExprienceSection.module.scss";
import st from "../../../styles/section.module.scss";
import { useEffect } from "react";

export default function ExprienceSection() {
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
    threshold: 0,
  });

  return (
    <section className={st.section}>
      <Heading2 className={st.section__heading} id="experience">
        Work exprience
      </Heading2>
      <div className={s.expSection__content}>
        <div className={s.expSection__content__primary}>
          <motion.div
            className={s.expSection__content__primary__title__container}
            ref={ref}
            variants={transitionToRight}
            initial="start"
            animate={inView ? { x: 0, opacity: 1 } : ""}
            transition={{ duration: 1 }}
          >
            <PMedium className={s.expSection__content__primary__title}>
              Harbour Space
            </PMedium>
            <PSmall className={s.expSection__content__primary__date}>
              02/2022 - 06/2022
            </PSmall>
          </motion.div>

          <motion.div
            className={s.expSection__content__primary__details__container}
            ref={ref}
            initial="start"
            animate={inView ? { x: 0, opacity: 1 } : ""}
            transition={{ duration: 1 }}
            variants={transitionToLeft}
          >
            <PSmall className={s.expSection__content__primary__details}>
              I worked in Harbour Space as a frontend developer. my duty was to
              take care of content of the their website and develope websites
              for students. for example i created a page where students can
              check their grade and leave feedback for the class.
            </PSmall>
          </motion.div>
        </div>
        <div className={s.expSection__content__secondary}>
          <motion.div
            className={s.expSection__content__secondary__title__container}
            ref={ref}
            initial="start"
            animate={inView ? { x: 0, opacity: 1 } : ""}
            transition={{ duration: 1 }}
            variants={transitionToRight}
          >
            <PMedium className={s.expSection__content__secondary__title}>
              Rastak company
            </PMedium>
            <PSmall className={s.expSection__content__secondary__date}>
              02/2021 - 05/2021
            </PSmall>
          </motion.div>
          <motion.div
            className={s.expSection__content__secondary__details__container}
            ref={ref}
            initial="start"
            animate={inView ? { x: 0, opacity: 1 } : ""}
            transition={{ duration: 1 }}
            variants={transitionToLeft}
          >
            <PSmall className={s.expSection__content__secondary__details}>
              I worked in Rastak as an intern for 3 months. There i was a member
              of a team where we were desiging the required schemas for mobile
              and web apps.
            </PSmall>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
