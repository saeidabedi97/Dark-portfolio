import { extend } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
  Heading1,
  PLarge,
  Button,
} from "../../../components/AtomicComponents/Text/Text";
import Scene from "../../../components/AtomicComponents/Scene/Scene";
extend({ Canvas });
import s from "../HeroPage/HeroPage.module.scss";

export default function HeroPage() {
  return (
    <>
      <div className={s.hero}>
        <div className={s.hero__container}>
          <motion.div
            className={s.hero__container__inner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <Heading1 className={s.hero__container__title}>
              Saeid Abedi
            </Heading1>
            <PLarge className={s.hero__container__job__text}>
              FRONTEND DEVELOPER
            </PLarge>
            <Button className={s.hero__container__button}>view cv</Button>
          </motion.div>
          <div className={s.hero__scene__container}>
            <Scene />
          </div>
        </div>
      </div>
    </>
  );
}
