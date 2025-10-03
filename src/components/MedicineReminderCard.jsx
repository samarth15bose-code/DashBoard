import { Clock, Pill, BellRing } from "lucide-react";

export default function MedicineReminderCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
          <Pill size={20} /> Morning Dose
        </h3>
        <span className="text-xs text-gray-400">Today</span>
      </div>

      {/* Medicine Info */}
      <div className="mb-4">
        <p className="text-gray-200 font-medium">Amoxicillin 500mg</p>
        <p className="text-sm text-gray-400">Take after breakfast with water</p>
      </div>

      {/* Time + Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} className="text-purple-400" />
          <span>08:00 AM</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <BellRing size={18} className="text-purple-400 animate-pulse" />
          <span className="text-sm">Reminder On</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
          Mark as Taken
        </button>
        <button className="flex-1 bg-gray-700 text-gray-300 py-2 rounded-lg hover:bg-gray-600 transition">
          Snooze
        </button>
      </div>
    </div>
  );
}
