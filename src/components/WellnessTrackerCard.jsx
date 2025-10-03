import { Moon, Droplet, Smile, Dumbbell } from "lucide-react";

export default function WellnessTrackerCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition h-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
        🧘 Wellness Tracker
      </h3>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {/* Sleep */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <Moon className="text-purple-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Sleep</p>
          <p className="text-sm text-gray-400">7 hrs</p>
        </div>

        {/* Hydration */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <Droplet className="text-purple-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Hydration</p>
          <p className="text-sm text-gray-400">1.8 L</p>
        </div>

        {/* Mood */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <Smile className="text-purple-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Mood</p>
          <p className="text-sm text-gray-400">😊 Good</p>
        </div>

        {/* Exercise */}
        <div className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
          <Dumbbell className="text-purple-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Exercise</p>
          <p className="text-sm text-gray-400">30 min</p>
        </div>
      </div>
    </div>
  );
}
