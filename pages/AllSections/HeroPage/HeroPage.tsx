import { Suspense, lazy } from "react";
import NavBar from "../../../components/AtomicComponents/Navbar/NavBar";
import { Stats } from "@react-three/drei";
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
const AboutMe = lazy(() => import("../AboutMeSection/AboutMe"));
const SkillSection = lazy(() => import("../SkillSection/SkillSection"));
const ProjectSection = lazy(() => import("../ProjectSection/ProjectSection"));
const ExprienceSection = lazy(
  () => import("../ExprienceSection/ExprienceSection")
);

export default function HeroPage({ aboutSection, projectSection }) {
  const loading = () => {
    return <div style={{ fontSize: "45px", color: "white" }}>Loading...</div>;
  };

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
      <Suspense fallback={loading()}>
        <AboutMe aboutSection={aboutSection} />
      </Suspense>
      <Suspense fallback={loading()}>
        <SkillSection />
      </Suspense>

      <Suspense fallback={loading()}>
        <ExprienceSection />
      </Suspense>

      <Suspense fallback={loading()}>
        <ProjectSection projectSection={projectSection} />
      </Suspense>
    </div>
  );
}
