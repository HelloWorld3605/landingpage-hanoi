import React, { Suspense, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function ChestModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotation logic removed
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Base of the chest */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2, 1, 1.5]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} />
        </mesh>

        {/* Lid of the chest */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 2, 32, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} />
        </mesh>

        {/* Lid Sides to close the cylinder curve */}
        <mesh position={[0, 0.25, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.5, 1.9, 0.05]} /> {/* Filler plane inside if needed, or just rely on cylinder */}
          <meshStandardMaterial color="#654321" />
        </mesh>

        {/* Metal banding - vertical */}
        <mesh position={[-0.8, -0.5, 0]}>
          <boxGeometry args={[0.2, 1.02, 1.52]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.8, -0.5, 0]}>
          <boxGeometry args={[0.2, 1.02, 1.52]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Lock */}
        <mesh position={[0, 0, 0.76]}>
          <boxGeometry args={[0.4, 0.5, 0.1]} />
          <meshStandardMaterial color="#DAA520" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}


function GenericModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2} />;
}

export function IncludedSection() {
  const sectionRef = useRef(null);
  const [customModelUrl, setCustomModelUrl] = React.useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomModelUrl(url);
    }
  };

  return (
    <section ref={sectionRef} id="included" className="bg-[#111] text-white py-24 px-4 md:px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="flex items-center gap-4 mb-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
            Hộp kí ức Hà Nội
          </h2>
          <div className="h-px flex-1 bg-white/20" />
        </motion.div>

        <div className="h-[60vh] w-full relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Environment preset="city" />
              {customModelUrl ? <GenericModel url={customModelUrl} /> : <GenericModel url="/AR-Code-1675140201728.glb" />}
              <OrbitControls enableZoom={true} autoRotate={false} />
            </Suspense>
          </Canvas>

          {/* Overlay Text */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 pointer-events-none max-w-sm z-10">
            <h3 className="text-4xl font-bold mb-4 drop-shadow-lg text-amber-500">Premium Experience</h3>
            <p className="text-white/80 drop-shadow-md">
              Immerse yourself in our curated journey. Every detail is handled with precision.
            </p>
          </div>

          {/* Upload Button - Visible on hover or if model is loaded */}
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <label className="cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span>Thay đổi 3D Model</span>
              <input
                type="file"
                accept=".glb,.gltf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
