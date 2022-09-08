import Image from "next/image";
import {
  Heading2,
  PMedium,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import { urlFor } from "../../../client";
import s from "../AboutMeSection/AboutMe.module.scss";
import { useState } from "react";

export default function AboutMe({ aboutSection = [] }) {
  console.log(aboutSection);

  const text = aboutSection[0]?.body[0]?.children[0]?.text;
  const textArray = text?.split(".");
  // console.log(textArray);

  return (
    <section className={s.aboutMe__section}>
      {aboutSection &&
        aboutSection.map((post, index) => (
          <div key={index} className={s.aboutMe__container}>
            <Heading2 className={s.aboutMe__title}>{post.title}</Heading2>
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
