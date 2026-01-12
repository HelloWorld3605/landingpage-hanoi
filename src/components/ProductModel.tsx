import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FC, Suspense } from "react";
import { Group } from "three";

type GLTFResult = {
  scene: Group;
};

const Model: FC = () => {
  const { scene } = useGLTF("/models/scene.gltf") as GLTFResult;
  return <primitive object={scene} scale={1.2} />;
};

const ProductModel: FC = () => {
  return (
    <Canvas camera={{ position: [0, 1.6, 3], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls
        enableZoom={true}
        minDistance={1}
        maxDistance={10}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
};

export default ProductModel;

/* Optional: preload để load trước model */
useGLTF.preload("/models/scene.gltf");
