import { Link } from "react-router-dom";
import { Home, Bell, Activity, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 shadow-lg flex flex-col p-6">
      <h2 className="text-xl font-bold text-purple-400 mb-10">🔮Alchemist Grimoire</h2>
      <nav className="flex flex-col gap-4 text-gray-300">
        <Link to="/dashboard" className="flex items-center gap-3 hover:text-purple-400 transition">
          <Home size={18}/> Dashboard
        </Link>
        <Link to="/reminders" className="flex items-center gap-3 hover:text-purple-400 transition">
          <Bell size={18}/> Reminders
        </Link>
        <Link to="/wellness" className="flex items-center gap-3 hover:text-purple-400 transition">
          <Activity size={18}/> Wellness
        </Link>
        <Link to="/settings" className="flex items-center gap-3 hover:text-purple-400 transition">
          <Settings size={18}/> Settings
        </Link>
      </nav>
    </aside>
  );
}
