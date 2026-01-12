import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Center,
  Environment,
  useAnimations,
} from "@react-three/drei";
import { FC, Suspense, useState, useEffect } from "react";
import { Group, BackSide, AnimationClip, LoopOnce } from "three";

type GLTFResult = {
  scene: Group;
  animations: AnimationClip[];
};

const Model: FC = () => {
  const { scene, animations } = useGLTF(
    "/models/demo2/scene.gltf"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, scene);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Play the first animation found
    const actionName = Object.keys(actions)[0];
    const action = actions[actionName];

    if (action) {
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;

      if (isOpen) {
        action.reset().fadeIn(0.1).play();
        action.timeScale = 1; // Normal speed
      } else {
        // Reverse animation to close
        action.timeScale = -1;
        action.paused = false;
      }
    }
  }, [isOpen, actions]);

  return (
    <Center>
      <Environment preset="city" />
      <primitive
        object={scene}
        scale={1.2}
        onClick={(e: any) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      />
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
useGLTF.preload("/models/demo2/scene.gltf");
