import { HorizontalLine } from "../../../components/AtomicComponents/HorizontalLine/HorizontalLine";
import {
  Heading2,
  PMedium,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../ExprienceSection/ExprienceSection.module.scss";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import st from "../../../styles/section.module.scss";

export default function ExprienceSection() {
  const [width, height] = useWindowSize({
    wait: 0,
    leading: true,
  });
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();
  return (
    <section className={st.section}>
      <Heading2 className={st.section__heading}>Work exprience</Heading2>
      <div className={s.expSection__content}>
        <div className={s.expSection__content__primary}>
          <div className={s.expSection__content__primary__title__container}>
            <PMedium className={s.expSection__content__primary__title}>
              Harbour Space
            </PMedium>
            <PSmall className={s.expSection__content__primary__date}>
              02/2022 - 06/2022
            </PSmall>
          </div>

          <div className={s.expSection__content__primary__details__container}>
            <PSmall className={s.expSection__content__primary__details}>
              I worked in Harbour Space as a frontend developer. my duty was to
              take care of content of the their website and develope websites
              for students. for example i created a page where students can
              check their grade and leave feedback for the class.
            </PSmall>
          </div>
        </div>
        <div className={s.expSection__content__secondary}>
          <div className={s.expSection__content__secondary__title__container}>
            <PMedium className={s.expSection__content__secondary__title}>
              Rastak company
            </PMedium>
            <PSmall className={s.expSection__content__secondary__date}>
              02/2021 - 05/2021
            </PSmall>
          </div>
          <div className={s.expSection__content__secondary__details__container}>
            <PSmall className={s.expSection__content__secondary__details}>
              I worked in Rastak as an intern for 3 months. There i was a member
              of a team where we were desiging the required schemas for mobile
              and web apps.
            </PSmall>
          </div>
        </div>
      </div>
    </section>
  );
}
