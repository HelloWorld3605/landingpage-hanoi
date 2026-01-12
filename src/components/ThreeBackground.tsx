import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

// Configuration for model positions per section
const arrPositionModel = [
    {
        id: "hero",
        position: { x: 2, y: 0, z: 2 },
        rotation: { x: 0, y: -0.5, z: 0 },
    },
    {
        id: "about",
        position: { x: -2, y: -1, z: 1 },
        rotation: { x: 0.2, y: 0.5, z: 0 },
    },
    {
        id: "included",
        position: { x: 2, y: 0, z: 0 },
        rotation: { x: 0, y: -0.5, z: 0.2 },
    },
    {
        id: "contacts",
        position: { x: 0, y: 0, z: 3 },
        rotation: { x: 0, y: 0, z: 0 },
    },
];

function Model() {
    const meshRef = useRef<THREE.Group>(null);
    const [activeSection, setActiveSection] = useState("hero");

    // Load a simple model or use primitives if no model available
    // Using a primitive group for "Bee" representation

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let current = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Trigger when section is in the upper third of the viewport
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    current = section.id;
                }
            });

            if (current && current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    useEffect(() => {
        const position_active = arrPositionModel.findIndex(
            (val) => val.id === activeSection
        );

        if (position_active >= 0 && meshRef.current) {
            const new_coordinates = arrPositionModel[position_active];

            gsap.to(meshRef.current.position, {
                x: new_coordinates.position.x,
                y: new_coordinates.position.y,
                z: new_coordinates.position.z,
                duration: 2,
                ease: "power1.out",
            });

            gsap.to(meshRef.current.rotation, {
                x: new_coordinates.rotation.x,
                y: new_coordinates.rotation.y,
                z: new_coordinates.rotation.z,
                duration: 2,
                ease: "power1.out",
            });
        }
    }, [activeSection]);

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#fbbf24" metalness={0.6} roughness={0.2} />
                </mesh>
                <mesh position={[0.8, 0.3, 0.5]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[0.8, 0.3, -0.5]}>
                    <sphereGeometry args={[0.2]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </Float>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <Environment preset="city" />
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    );
}
