import { Link } from "react-router-dom";
import { Home, Bell, Activity, Settings } from "lucide-react";

export default function Sidebar({ closeSidebar }) {
  return (
    <aside className="flex flex-col h-full">
      {/* Logo */}
      <h2 className="text-xl font-bold text-purple-400 mb-8 px-4">
        🔮 Alchemist Grimoire
      </h2>

      {/* Links */}
      <nav className="flex flex-col gap-3 text-gray-300 px-2">
        <Link
          to="/dashboard"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-purple-400 transition"
        >
          <Home size={18} /> Dashboard
        </Link>
        <Link
          to="/reminders"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-purple-400 transition"
        >
          <Bell size={18} /> Reminders
        </Link>
        <Link
          to="/wellness"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-purple-400 transition"
        >
          <Activity size={18} /> Wellness
        </Link>
        <Link
          to="/settings"
          onClick={closeSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-purple-400 transition"
        >
          <Settings size={18} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
