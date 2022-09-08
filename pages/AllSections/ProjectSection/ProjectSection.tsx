import Image from "next/image";
import { HorizontalLine } from "../../../components/AtomicComponents/HorizontalLine/HorizontalLine";
import {
  Heading2,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import { VerticalLine } from "../../../components/AtomicComponents/VerticalLine/VerticalLine";
import s from "../ProjectSection/ProjectSection.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProjectSection() {
  return (
    <div className={s.ps}>
      <div className={s.ps__heading__container}>
        <Heading2 className={s.ps__heading__text}>Projects</Heading2>
        <HorizontalLine />
      </div>
      <div className={s.ps__details}>
        <div className={s.ps__details__card1}>
          <div className={s.ps__details__card1__figure__container}>
            <Image
              src="/htmlnew.png"
              alt="project image"
              width={350}
              height={350}
            />
          </div>
          <div className={s.ps__details__card1__text__container}>
            <PMedium>
              This work represents a single page website created for harbour
              space. This page is created only with html, css and vanilla
              javascript.
            </PMedium>
            <ProgressBar now={60} animated label={"60%"} />
          </div>
        </div>
        {/* <div className={s.ps__details__card2}>
          <div className={s.ps__details__card3_figure_container}></div>
          <div className={s.ps__details__card3__text__container}></div>
        </div>
        <div className={s.ps__details__card3}>
          <div className={s.ps__details__card3_figure_container}></div>
          <div className={s.ps__details__card3__text__container}></div>
        </div> */}
      </div>
    </div>
  );
}
