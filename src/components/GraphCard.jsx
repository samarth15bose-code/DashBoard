import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function GraphCard() {
  // Sample daily progress data
  const data = [
    { day: "Mon", progress: 70 },
    { day: "Tue", progress: 85 },
    { day: "Wed", progress: 60 },
    { day: "Thu", progress: 90 },
    { day: "Fri", progress: 75 },
    { day: "Sat", progress: 95 },
    { day: "Sun", progress: 80 },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition">
      {/* Header */}
      <h3 className="text-lg font-semibold text-purple-400 mb-4">📊 Daily Progress</h3>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1f1f2f", border: "none" }}
              labelStyle={{ color: "#ccc" }}
            />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: "#a855f7" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
