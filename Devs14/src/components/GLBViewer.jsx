import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

export default function GLBViewer() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute top-4 left-4 z-10 text-white">
        <h1 className="text-3xl font-bold mb-2">GLB Model Viewer</h1>
        <p className="text-sm opacity-80">Loading suit.glb from data folder</p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          {/* Environment for better lighting */}
          <Environment preset="studio" />

          {/* 3D Model */}
          <Model url="/data/base_suit/suit.glb" />

          {/* Grid for reference */}
          <gridHelper args={[10, 10]} />

          {/* Camera Controls */}
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              autoRotate={false}
              maxDistance={10}
              minDistance={2}
            />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
