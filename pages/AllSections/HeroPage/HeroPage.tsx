import NavBar from "../../../components/AtomicComponents/Navbar/NavBar";
import { Stats } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import AboutMe from "../AboutMeSection/AboutMe";
import { Canvas } from "@react-three/fiber";
import {
  Heading1,
  PLarge,
  Button,
} from "../../../components/AtomicComponents/Text/Text";
import Scene from "../../../components/AtomicComponents/Scene/Scene";
import SkillSection from "../SkillSection/SkillSection";
import ExprienceSection from "../ExprienceSection/ExprienceSection";
extend({ Canvas });
import s from "../HeroPage/HeroPage.module.scss";
import ProjectSection from "../ProjectSection/ProjectSection";

export default function HeroPage({ posts }) {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <NavBar />
      <Stats />
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
      <AboutMe posts={posts} />

      <SkillSection posts={posts} />

      <ExprienceSection />

      <ProjectSection />
    </div>
  );
}
