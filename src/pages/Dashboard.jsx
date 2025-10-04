import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import AlchemyOrb from "../components/AlchemyOrb";

import { Menu, X } from "lucide-react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
    });
  }, []);

  // Close sidebar on Escape key + lock scroll
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsSidebarOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* --------------------------
          Off-canvas Sidebar (all screens)
      ---------------------------*/}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={closeSidebar}
            className="absolute inset-0 bg-black/50 transition-opacity opacity-100"
          />

          {/* Sidebar Drawer */}
          <div
            className={`relative w-64 bg-gray-800 p-4 transform transition-transform duration-300 shadow-lg ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-purple-400">
                Alchemist’s Grimoire
              </span>
              <button
                onClick={closeSidebar}
                aria-label="Close sidebar"
                className="p-2 rounded-md hover:bg-gray-700 transition"
              >
                <X className="h-6 w-6 text-gray-200" />
              </button>
            </div>

            <Sidebar closeSidebar={closeSidebar} />
          </div>
        </div>
      )}

      {/* --------------------------
          Main Content
      ---------------------------*/}
      <div className="flex flex-col flex-1">
        {/* Topbar with hamburger */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <button
            onClick={openSidebar}
            className="p-2 rounded-md hover:bg-gray-700 transition"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6 text-gray-200" />
          </button>

          <Topbar />
        </div>

        <main data-aos="fade-down" className="p-6 flex-1 overflow-y-auto">
          {/* Header + Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-3xl font-bold text-purple-400">
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

      {/* Floating Alchemy Orb */}
      <div className="z-30" data-aos="zoom-in">
        <AlchemyOrb />
      </div>
    </div>
  );
}
