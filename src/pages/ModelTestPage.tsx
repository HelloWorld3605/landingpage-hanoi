import React, { useState, Suspense, useTransition } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Environment, Grid } from '@react-three/drei';
import { Link } from 'react-router-dom';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export function ModelTestPage() {
    const [modelUrl, setModelUrl] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            startTransition(() => {
                setModelUrl(url);
            });
        }
    };

    return (
        <div className="w-full h-screen bg-neutral-900 text-white flex flex-col">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <h1 className="text-xl font-bold text-amber-500">Kiểm Tra Mô Hình 3D</h1>
                <div className="flex gap-4 items-center">
                    <label className="cursor-pointer bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded font-medium transition-colors">
                        Tải lên .glb / .gltf
                        <input
                            type="file"
                            accept=".glb,.gltf"
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                    </label>
                </div>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
                    Quay lại Trang Chủ
                </Link>
            </div>

            <div className="flex-1 relative bg-black">
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stage environment="city" intensity={0.6}>
                            {modelUrl ? (
                                <Model url={modelUrl} />
                            ) : (
                                <mesh>
                                    <boxGeometry args={[1, 1, 1]} />
                                    <meshStandardMaterial color="hotpink" />
                                </mesh>
                            )}
                        </Stage>
                        <Grid renderOrder={-1} position={[0, -0.5, 0]} infiniteGrid fadeDistance={50} sectionColor={[0.5, 0.5, 0.5]} cellColor={[0.2, 0.2, 0.2]} />
                    </Suspense>
                    <OrbitControls makeDefault autoRotate={!modelUrl} />
                    <Environment preset="city" />
                </Canvas>

                {!modelUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p className="bg-black/50 p-4 rounded text-neutral-300 backdrop-blur-sm">
                            Tải lên mô hình để xem. Đang hiển thị khối hộp mẫu.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
