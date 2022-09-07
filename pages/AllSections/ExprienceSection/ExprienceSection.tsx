import { HorizontalLine } from "../../../components/AtomicComponents/HorizontalLine/HorizontalLine";
import {
  Heading2,
  PMedium,
} from "../../../components/AtomicComponents/Text/Text";
import { VerticalLine } from "../../../components/AtomicComponents/VerticalLine/VerticalLine";
import s from "../ExprienceSection/ExprienceSection.module.scss";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

export default function ExprienceSection() {
  const [width, height] = useWindowSize({
    wait: 0,
    leading: true,
  });
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();
  return (
    <div className={s.expSection}>
      <Heading2 className={s.expSection__heading}>Work exprience</Heading2>
      <HorizontalLine />
      <div className={s.expSection__content}>
        <div className={s.expSection__content__primary}>
          <div className={s.expSection__content__primary__title__container}>
            <PMedium className={s.expSection__content__primary__title}>
              Harbour Space
            </PMedium>
            <PMedium className={s.expSection__content__primary__date}>
              02/2022 - 06/2022
            </PMedium>
          </div>
          {width <= 767 ? <HorizontalLine /> : <VerticalLine />}
          <div className={s.expSection__content__primary__details__container}>
            <PMedium className={s.expSection__content__primary__details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              eleifend lacus feugiat. Donec fringilla varius augue non.
            </PMedium>
          </div>
        </div>
        <div className={s.expSection__content__secondary}>
          <div className={s.expSection__content__secondary__title__container}>
            <PMedium className={s.expSection__content__secondary__title}>
              Rastak company
            </PMedium>
            <PMedium className={s.expSection__content__secondary__date}>
              02/2021 - 05/2021
            </PMedium>
          </div>
          {width <= 767 ? <HorizontalLine /> : <VerticalLine />}
          <div className={s.expSection__content__secondary__details__container}>
            <PMedium className={s.expSection__content__secondary__details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              eleifend lacus feugiat. Donec fringilla varius augue non.
            </PMedium>
          </div>
        </div>
      </div>
    </div>
  );
}
