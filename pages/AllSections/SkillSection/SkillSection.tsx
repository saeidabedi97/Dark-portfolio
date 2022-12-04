import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Heading2,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../SkillSection/SkillSection.module.scss";
import SlideShow from "../../../components/AtomicComponents/ImageSlideShow/SlideShow";
import st from "../../../styles/section.module.scss";
import { useEffect } from "react";

export default function SkillSection() {
  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.section
      className={st.section}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="skills"
    >
      <div className={s.skill__title__section}>
        <Heading2 className={st.section__heading}>Skill & tools </Heading2>
      </div>
      <SlideShow />
    </motion.section>
  );
}
