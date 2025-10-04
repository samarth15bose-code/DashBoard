import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    <div className="bg-black p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition h-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
        📊 Daily Progress
      </h3>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#ffd700" }}
            />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#ffd700" // golden line
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: "#ffd700" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
