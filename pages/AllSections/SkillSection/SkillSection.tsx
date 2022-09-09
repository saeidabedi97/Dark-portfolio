import {
  Heading2,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../SkillSection/SkillSection.module.scss";
import SlideShow from "../../../components/AtomicComponents/ImageSlideShow/SlideShow";
import { VerticalLine } from "../../../components/AtomicComponents/VerticalLine/VerticalLine";
import { HorizontalLine } from "../../../components/AtomicComponents/HorizontalLine/HorizontalLine";
import st from "../../../styles/section.module.scss";

export default function SkillSection() {
  return (
    <section className={st.section}>
      <div className={s.skill__title__section}>
        <Heading2 className={st.section__heading}>Skill & tools </Heading2>
      </div>
      <SlideShow />
    </section>
  );
}
