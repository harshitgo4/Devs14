import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SuitsPage from "./components/SuitsPage";
import PantsPage from "./components/PantsPage";
import GLBViewer from "./components/GLBViewer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (route) => {
    navigate(route);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "left-50" : "left-4"
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Navigation</h2>

          <div className="space-y-4">
            <button
              onClick={() => handleNavigation("/suits")}
              className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                    Suits
                  </h3>
                  <p className="text-sm text-gray-600">Elegant formal wear</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleNavigation("/pants")}
              className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002-2H5a2 2 0 00-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-600">
                    Pants
                  </h3>
                  <p className="text-sm text-gray-600">Comfortable trousers</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/suits" element={<SuitsPage />} />
          <Route path="/pants" element={<PantsPage />} />
          <Route path="/glb-viewer" element={<GLBViewer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
