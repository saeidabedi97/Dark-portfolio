import { Slide } from "react-slideshow-image";
import {
  Heading2,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../SkillSection/SkillSection.module.scss";
import SlideShow from "../../../components/AtomicComponents/ImageSlideShow/SlideShow";
import { VerticalLine } from "../../../components/AtomicComponents/VerticalLine/VerticalLine";
import { HorizontalLine } from "../../../components/AtomicComponents/HorizontalLine/HorizontalLine";

export default function SkillSection({ posts }) {
  return (
    <section className={s.skill__section}>
      <div className={s.skill__title__section}>
        <Heading2 className={s.skill__title}>Skill & tools </Heading2>
        <HorizontalLine />
      </div>
      {/* <Slide {...properties}>
        <div className={s.skill__content}>
          {skills &&
            skills.map((skill: string, index: number) => {
              return (
                <div className={s.skill__cards} key={index}>
                  <div className={s.skill__card}>
                    <PMedium className={s.skill__inner__text}>{skill}</PMedium>
                  </div>
                </div>
              );
            })}
        </div>
      </Slide> */}
      <SlideShow />
    </section>
  );
}
