import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import AlchemyOrb from "../components/AlchemyOrb";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-6 flex-1 overflow-y-auto">
          {/* Header + Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2  className="text-3xl font-bold text-purple-400">
              Welcome back, Alchemist ✨
            </h2>

            <div className="flex gap-3">
              <button className="bg-purple-500 hover:bg-purple-600 transition text-white font-medium py-2 px-4 rounded-lg">
                + Add Medicine
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 transition text-gray-200 font-medium py-2 px-4 rounded-lg">
                Edit Schedule
              </button>
            </div>
          </div>

          {/* All Cards */}
          <DashboardCards />
        </main>
      </div>

      <AlchemyOrb />
    </div>
  );
}
