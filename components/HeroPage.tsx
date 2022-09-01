import NavBar from "./AtomicComponents/Navbar/NavBar";
import { MyName } from "./AtomicComponents/3DModel/MyName";
import { Stats } from "@react-three/drei";
import { extend } from "@react-three/fiber";

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
} from "./AtomicComponents/Text/Text";
import Scene from "../components/AtomicComponents/Scene/Scene";
extend({ Canvas });

/*create buttons, colors, icons for style guide */

export default function HeroPage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBar />

      {/* <MyName /> */}
      <div style={{ height: "100vh" }}>
        <Heading1>Saeid Abedi</Heading1>
        <Scene />
        <Stats />
      </div>
    </div>
  );
}
