import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

export default function BoxesPage() {
  return (
    <>
      <h1>Click on me - Hover me :)</h1>
      <Canvas camera={{ position: [0, 0, 135] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Box position={[10, 0, 0]} />

        <OrbitControls />
      </Canvas>
    </>
  );
}
