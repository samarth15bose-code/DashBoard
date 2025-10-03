import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6"   data-aos="fade-down"
  data-aos-duration="1200">
      <h3 className="text-lg font-semibold text-gray-100">Dashboard</h3>
      <div className="flex items-center gap-6">
        <button className="relative text-gray-300 hover:text-purple-400 transition">
          <Bell size={20}/>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <img 
            src="https://i.pravatar.cc/40" 
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-600"
          />
          <span className="text-sm">Alchemist</span>
        </div>
      </div>
    </header>
  );
}
