export default function DashboardCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
        <h3 className="text-lg font-semibold text-purple-400">Medicine Reminders</h3>
        <p className="mt-2 text-gray-300">💊 3 doses scheduled today</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
        <h3 className="text-lg font-semibold text-purple-400">Wellness Tracker</h3>
        <p className="mt-2 text-gray-300">😴 Sleep: 7 hrs | 💧 Hydration: 1.5L</p>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
        <h3 className="text-lg font-semibold text-purple-400">Daily Checklist</h3>
        <ul className="mt-2 text-gray-300 space-y-1">
          <li>✔ Vitamin D</li>
          <li>❌ Evening dose</li>
        </ul>
      </div>
    </div>
  );
}
