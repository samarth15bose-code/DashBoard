import { useState } from "react";

export default function AlchemyOrb() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Orb */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-400 to-yellow-300 shadow-[0_0_20px_rgba(255,215,0,0.5)] animate-pulse flex items-center justify-center text-black font-bold text-lg cursor-pointer">
          75%
        </div>

        {/* Glow rings */}
        <span className="absolute w-28 h-28 rounded-full bg-yellow-500 opacity-20 animate-ping"></span>
        <span className="absolute w-32 h-32 rounded-full bg-yellow-400 opacity-10 animate-ping delay-200"></span>
      </div>

      {/* Expanded info on hover */}
      {hover && (
        <div className="mt-3 p-4 w-60 bg-black rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] flex flex-col gap-2 text-gray-200">
          <p className="text-yellow-400 font-semibold">Today's Summary</p>
          <p>💊 Medicine Taken: 3/4</p>
          <p>💧 Hydration: 1.5L</p>
          <p>😴 Sleep: 7 hrs</p>
          <p>😊 Mood: Good</p>
        </div>
      )}
    </div>
  );
}
