import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";

export default function DailyChecklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Take Vitamin D", done: true },
    { id: 2, text: "Drink 2L Water", done: false },
    { id: 3, text: "Evening Dose", done: false },
    { id: 4, text: "15 min Meditation", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-purple-500/20 transition h-full">
      {/* Header */}
      <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
        ✅ Daily Checklist
      </h3>

      {/* Task List */}
      <ul className="space-y-3">
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {task.done ? (
              <CheckSquare className="text-purple-400" size={20} />
            ) : (
              <Square className="text-gray-500 group-hover:text-purple-300 transition" size={20} />
            )}
            <span className={`text-gray-200 ${task.done ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Progress */}
      <div className="mt-4 text-sm text-gray-400">
        {tasks.filter(t => t.done).length} of {tasks.length} tasks completed
      </div>
    </div>
  );
}
