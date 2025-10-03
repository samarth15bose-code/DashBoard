import { useState } from "react";

export default function AlchemyOrb() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Orb */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 shadow-xl animate-pulse flex items-center justify-center text-white font-bold text-lg cursor-pointer">
          75%
        </div>

        {/* Glow rings */}
        <span className="absolute w-28 h-28 rounded-full bg-purple-500 opacity-20 animate-ping"></span>
        <span className="absolute w-32 h-32 rounded-full bg-pink-500 opacity-10 animate-ping delay-200"></span>
      </div>

      {/* Expanded info on hover */}
      {hover && (
        <div className="mt-3 p-4 w-60 bg-gray-800 rounded-xl shadow-lg flex flex-col gap-2 text-gray-200">
          <p className="text-purple-400 font-semibold">Today's Summary</p>
          <p>💊 Medicine Taken: 3/4</p>
          <p>💧 Hydration: 1.5L</p>
          <p>😴 Sleep: 7 hrs</p>
          <p>😊 Mood: Good</p>
        </div>
      )}
    </div>
  );
}
