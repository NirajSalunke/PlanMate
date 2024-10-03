/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Loader,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
// import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 55, near: 0.1, position: [-4, 3, 6] }}
    >
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};
export default EarthCanvas;
