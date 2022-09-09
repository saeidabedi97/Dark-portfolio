import { extend } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import {
  Heading1,
  PLarge,
  Button,
} from "../../../components/AtomicComponents/Text/Text";
import Scene from "../../../components/AtomicComponents/Scene/Scene";
extend({ Canvas });
import s from "../HeroPage/HeroPage.module.scss";

export default function HeroPage() {
  const loading = () => {
    return <div style={{ fontSize: "45px", color: "white" }}>Loading...</div>;
  };

  return (
    <>
      <div className={s.hero}>
        <div className={s.hero__container}>
          <div className={s.hero__container__inner}>
            <Heading1 className={s.hero__container__title}>
              Saeid Abedi
            </Heading1>
            <PLarge className={s.hero__container__job__text}>
              FRONTEND DEVELOPER
            </PLarge>
            <Button className={s.hero__container__button}>view cv</Button>
          </div>
          <div className={s.hero__scene__container}>
            <Scene />
          </div>
        </div>
      </div>
    </>
  );
}
