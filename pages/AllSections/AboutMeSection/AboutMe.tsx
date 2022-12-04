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

// const boxVariant = {
//   visible: { opacity: 1, scale: 1 },
//   hidden: { opacity: 0, scale: 0 },
// };

export default function AboutMe({ aboutSection = [] }) {
  console.log(aboutSection);

  const text = aboutSection[0]?.body[0]?.children[0]?.text;
  const textArray = text?.split(".");
  // console.log(textArray);

  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  // }, [control, inView]);

  return (
    <section className={st.section}>
      {aboutSection &&
        aboutSection.map((post, index) => (
          <div key={index} className={s.aboutMe__container} id="about">
            <Heading2 className={st.section__heading}>{post.title}</Heading2>
            <div className={s.aboutMe__content}>
              <div className={s.aboutMe__imgContainer}>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt="my picture"
                  layout={"responsive"}
                  className={s.aboutMe__img}
                  width={2898}
                  height={4096}
                />
              </div>
              <div className={s.aboutMe__txtContainer}>
                <PSmall>{textArray[0]}.</PSmall>
                <PSmall>{textArray[1]}.</PSmall>
                <PSmall>{textArray[2]}.</PSmall>
                <PSmall>{textArray[3]}.</PSmall>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
