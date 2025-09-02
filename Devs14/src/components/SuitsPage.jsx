import { useNavigate } from "react-router-dom";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function SuitModel() {
  const { scene } = useGLTF("/data/base_suit/suit.glb");

  // Clone the scene and apply transformations
  const clonedScene = scene.clone();
  clonedScene.scale.setScalar(1.5);
  clonedScene.position.set(0, 0, 0);

  return <primitive object={clonedScene} />;
}

function SuitsPage() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState("lapels");

  // Style options data
  const styleOptions = {
    lapels: [
      {
        name: "Notch Lapel",
        color: "bg-blue-200",
        borderColor: "border-blue-300",
      },
      {
        name: "Peak Lapel",
        color: "bg-blue-300",
        borderColor: "border-blue-400",
      },
      {
        name: "Shawl Lapel",
        color: "bg-blue-400",
        borderColor: "border-blue-500",
      },
    ],
    pockets: [
      {
        name: "Flap Pockets",
        color: "bg-green-200",
        borderColor: "border-green-300",
      },
      {
        name: "Patch Pockets",
        color: "bg-green-300",
        borderColor: "border-green-400",
      },
      {
        name: "Jetted Pockets",
        color: "bg-green-400",
        borderColor: "border-green-500",
      },
    ],
    lining: [
      {
        name: "Silk Lining",
        color: "bg-purple-200",
        borderColor: "border-purple-300",
      },
      {
        name: "Cotton Lining",
        color: "bg-purple-300",
        borderColor: "border-purple-400",
      },
      {
        name: "Bemberg Lining",
        color: "bg-purple-400",
        borderColor: "border-purple-500",
      },
    ],
    vents: [
      {
        name: "Single Vent",
        color: "bg-orange-200",
        borderColor: "border-orange-300",
      },
      {
        name: "Double Vent",
        color: "bg-orange-300",
        borderColor: "border-orange-400",
      },
      {
        name: "No Vent",
        color: "bg-orange-400",
        borderColor: "border-orange-500",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Suits Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted suits made with premium fabrics and
            attention to detail. Perfect for every occasion, from business
            meetings to special events.
          </p>
        </div>

        {/* Main Layout - 80% width, centered */}
        <div
          className="w-4/5 mx-auto bg-[#FAFAFA] rounded-lg shadow-lg p-6"
          style={{ height: "70vh" }}
        >
          <div className="flex gap-8 h-full">
            {/* Left Pane - 3D Model */}
            <div className="flex-1 bg-white rounded-lg p-6">
              <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                style={{ height: "100%", width: "100%", background: "#bdb7b7" }}
                gl={{ antialias: true }}
              >
                <Suspense fallback={null}>
                  {/* Enhanced Lighting Setup */}
                  {/* Main ambient light for overall illumination */}
                  <ambientLight intensity={0.3} color="#ffffff" />

                  {/* Key light - main directional light for primary shadows */}
                  <directionalLight
                    position={[5, 10, 5]}
                    intensity={1.2}
                    color="#ffffff"
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                  />

                  {/* Fill light - softer light from opposite side */}
                  <directionalLight
                    position={[-5, 8, -5]}
                    intensity={0.6}
                    color="#f0f8ff"
                  />

                  {/* Rim light - backlight for edge definition */}
                  <directionalLight
                    position={[0, 5, -8]}
                    intensity={0.8}
                    color="#ffffff"
                  />

                  {/* Bottom fill light for under-shadow areas */}
                  <directionalLight
                    position={[0, -5, 0]}
                    intensity={0.3}
                    color="#ffffff"
                  />

                  {/* Environment for realistic reflections */}
                  <Environment preset="studio" />

                  {/* 3D Model */}
                  <SuitModel />

                  {/* Camera Controls */}
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    autoRotate={false}
                    maxDistance={10}
                    minDistance={1}
                  />
                </Suspense>
              </Canvas>
            </div>

            {/* Right Pane - Style Options */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Upper Section - Style Options (30-40% height) */}
              <div
                className="bg-white rounded-lg p-4"
                style={{ height: "35%" }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Style Options
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedStyle("lapels")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStyle === "lapels"
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-4 h-4 bg-blue-200 rounded"></div>
                    <span>Lapels</span>
                  </button>
                  <button
                    onClick={() => setSelectedStyle("pockets")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStyle === "pockets"
                        ? "bg-green-100 text-green-700 border-2 border-green-300"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-4 h-4 bg-green-200 rounded"></div>
                    <span>Pockets</span>
                  </button>
                  <button
                    onClick={() => setSelectedStyle("lining")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStyle === "lining"
                        ? "bg-purple-100 text-purple-700 border-2 border-purple-300"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-4 h-4 bg-purple-200 rounded"></div>
                    <span>Lining</span>
                  </button>
                  <button
                    onClick={() => setSelectedStyle("vents")}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedStyle === "vents"
                        ? "bg-orange-100 text-orange-700 border-2 border-orange-300"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-4 h-4 bg-orange-200 rounded"></div>
                    <span>Vents</span>
                  </button>
                </div>
              </div>

              {/* Lower Section - Rendered Options */}
              <div className="bg-white rounded-lg p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {selectedStyle.charAt(0).toUpperCase() +
                    selectedStyle.slice(1)}{" "}
                  Options
                </h3>
                <div className="flex gap-3 overflow-x-auto">
                  {styleOptions[selectedStyle].map((option, index) => (
                    <div
                      key={index}
                      className={`w-16 h-16 ${option.color} rounded-lg border-2 ${option.borderColor} flex-shrink-0 flex items-center justify-center text-xs text-center font-medium p-1`}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6">
            Our fashion experts are here to help you find the perfect suit
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Stylist
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuitsPage;
