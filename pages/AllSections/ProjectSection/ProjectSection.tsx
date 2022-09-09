import {
  Button,
  Heading2,
  PSmall,
} from "../../../components/AtomicComponents/Text/Text";
import s from "../ProjectSection/ProjectSection.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useInView } from "react-intersection-observer";
import st from "../../../styles/section.module.scss";

export default function ProjectSection({ projectSection = [] }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  console.log(projectSection);
  return (
    <section className={st.section} ref={ref}>
      <div className={s.ps__heading__container}>
        <Heading2 className={st.section__heading}>Projects</Heading2>
      </div>
      <div className={s.ps__details}>
        {/*First card*/}
        <div className={s.ps__details__card1}>
          <div className={s.ps__details__card1__figure__container}>
            <video
              width="420"
              height="240"
              controls={false}
              autoPlay={true}
              muted
              loop
              preload="none"
            >
              <source src="/lamborghini.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={s.ps__details__card1__text__container}>
            <PSmall>{projectSection[0]?.body[0]?.children[0]?.text}</PSmall>
            <ProgressBar>
              <ProgressBar striped variant="green" now={86.1} key={1} />
              <ProgressBar variant="warning" now={9.3} key={2} />
              <ProgressBar striped variant="danger" now={4.6} key={3} />
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
          </div>
        </div>

        {/*Second card*/}
        <div className={s.ps__details__card2}>
          <div className={s.ps__details__card2__text__container}>
            <PSmall>{projectSection[0]?.body[0]?.children[0]?.text}</PSmall>
            <ProgressBar>
              <ProgressBar striped variant="green" now={86.1} key={1} />
              <ProgressBar variant="warning" now={9.3} key={2} />
              <ProgressBar striped variant="danger" now={4.6} key={3} />
            </ProgressBar>
            <div className={s.ps__details__card2__progress}>
              <PSmall className={s.ps__details__card2__progress__label1}>
                JavaScript
              </PSmall>
              <PSmall className={s.ps__details__card2__progress__label2}>
                css
              </PSmall>
              <PSmall className={s.ps__details__card2__progress__label3}>
                html
              </PSmall>
            </div>
          </div>
          <div className={s.ps__details__card2__figure__container}>
            <video
              width="420"
              height="240"
              controls={false}
              autoPlay={true}
              muted
              loop
              preload="none"
            >
              <source src="/portfolio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <Button className={s.ps__details__button}>Show more...</Button>
      </div>
    </section>
  );
}
