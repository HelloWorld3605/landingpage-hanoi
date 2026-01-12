import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { FC, Suspense } from "react";
import { Group, BackSide } from "three";

type GLTFResult = {
  scene: Group;
};

const Model: FC = () => {
  const { scene } = useGLTF("/models/scene.gltf") as GLTFResult;
  return (
    <Center>
      <Environment preset="city" />
      <primitive object={scene} scale={1.2} />
    </Center>
  );
};

const ProductModel: FC = () => {
  return (
    <Canvas camera={{ position: [0, 1.6, 3], fov: 45 }}>
      <ambientLight intensity={2.0} />
      <directionalLight position={[5, 5, 5]} intensity={3.0} />
      <directionalLight position={[-5, 5, -5]} intensity={2.0} />

      <Suspense fallback={null}>
        <Model />
        {/* Dynamic Dark Background */}
        <mesh scale={50}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            side={BackSide}
            color="#050505"
            roughness={0.6}
            metalness={0.2}
          />
        </mesh>
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
