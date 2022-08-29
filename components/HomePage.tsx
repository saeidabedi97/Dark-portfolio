import NavBar from "./AtomicComponents/Navbar/NavBar";
import { MyName } from "./AtomicComponents/3DModel/MyName";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div style={{ height: "100vh" }}>
        <Canvas>
          <MyName />
          <spotLight
            angle={12}
            color="blue"
            intensity={1}
            position={[-250, 10, -120]}
          />
          {/* <Environment preset="sunset" /> */}
          <meshPhysicalMaterial />
        </Canvas>
      </div>
    </div>
  );
}
