import { Moon, Droplet, Smile, Dumbbell } from "lucide-react";

export default function WellnessTrackerCard() {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition h-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
        🧘 Wellness Tracker
      </h3>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {/* Sleep */}
        <div className="bg-black p-4 rounded-xl flex flex-col items-center shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_12px_rgba(255,215,0,0.35)] transition">
          <Moon className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Sleep</p>
          <p className="text-sm text-gray-400">7 hrs</p>
        </div>

        {/* Hydration */}
        <div className="bg-black p-4 rounded-xl flex flex-col items-center shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_12px_rgba(255,215,0,0.35)] transition">
          <Droplet className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Hydration</p>
          <p className="text-sm text-gray-400">1.8 L</p>
        </div>

        {/* Mood */}
        <div className="bg-black p-4 rounded-xl flex flex-col items-center shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_12px_rgba(255,215,0,0.35)] transition">
          <Smile className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Mood</p>
          <p className="text-sm text-gray-400">😊 Good</p>
        </div>

        {/* Exercise */}
        <div className="bg-black p-4 rounded-xl flex flex-col items-center shadow-[0_0_8px_rgba(255,215,0,0.2)] hover:shadow-[0_0_12px_rgba(255,215,0,0.35)] transition">
          <Dumbbell className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Exercise</p>
          <p className="text-sm text-gray-400">30 min</p>
        </div>
      </div>
    </div>
  );
}
