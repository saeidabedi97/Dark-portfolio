import NavBar from "../../../components/AtomicComponents/Navbar/NavBar";
import { MyName } from "../../../components/AtomicComponents/3DModel/MyName";
import { Stats } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import AboutMe from "../AboutMeSection/AboutMe";
import { Canvas } from "@react-three/fiber";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  PLarge,
  PMedium,
  PSmall,
  Button,
} from "../../../components/AtomicComponents/Text/Text";
import Scene from "../../../components/AtomicComponents/Scene/Scene";
extend({ Canvas });

/*create buttons, colors, icons for style guide */

export default function HeroPage({ posts }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        // position: "relative",
        // minHeight: "100vh",
        // minWidth: "100vw",
      }}
    >
      <NavBar />
      <Stats />
      {/* <MyName /> */}

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="hero-container">
          <Heading1 className="name-title">Saeid Abedi</Heading1>
          <PLarge className="job-title">FRONTEND DEVELOPER</PLarge>
          <Button className="cv-button">view cv</Button>
        </div>
        <div className="scene-container">
          <Scene />
        </div>
      </div>
      <AboutMe posts={posts} />
    </div>
  );
}
