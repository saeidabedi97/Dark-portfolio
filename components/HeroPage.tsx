import NavBar from "./AtomicComponents/Navbar/NavBar";
import { MyName } from "./AtomicComponents/3DModel/MyName";
import { Environment, OrbitControls } from "@react-three/drei";
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
import Floor from "./AtomicComponents/Floor/Floor";

/*create buttons, colors, icons for style guide */

export default function HeroPage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBar />

      {/* <Heading1>Salam</Heading1>
      <Heading2>This is Heading 2</Heading2>
      <Heading3>This is Heading 3</Heading3>
      <Heading4>This is heading 4</Heading4>
      <Heading5>This is heading 5</Heading5>
      <PLarge>This is large paragraph</PLarge>
      <PMedium>This is medium paragraph</PMedium>
      <PSmall>This is small paragraph</PSmall> */}
      <div style={{ height: "100vh" }}>
        <Canvas>
          <spotLight
            angle={12}
            color="yellow"
            intensity={1}
            position={[25, 0, 0]}
          />
          <mesh
            scale={1}
            position={[0, 3, 0]}
            rotation={[-Math.PI / 35, 0, Math.PI / 5.5]}
          >
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <mesh
            scale={4}
            position={[-3, -1.161, -1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          {/* <MyName /> */}
          <Floor />
          <spotLight
            angle={12}
            color="orange"
            intensity={1}
            position={[0, 0, 50]}
          />

          {/* <Environment preset="sunset" /> */}
          <meshPhysicalMaterial />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
