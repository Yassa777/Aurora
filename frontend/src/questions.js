import { Menu } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Questionnaire() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98e4d6] to-[#e5d1f9] p-6">
      {/* Header Section */}
      <header className="relative z-10 flex items-center justify-between mb-6">
        {/* Logo */}
        <h1
          className="relative text-4xl font-script text-black px-4 py-2 bg-gradient-to-r from-[#e5d1f9] via-[#98e4d6] to-[#d5aaf0] rounded-md"
        >
          Aurora
        </h1>

        <button aria-label="Menu" className="p-2">
          <Menu size={24} />
        </button>
      </header>

      {/* Orange/White Separator */}
      <div className="h-[4px] bg-gradient-to-r from-[#FF7F50] to-white mb-8" />

      {/* Instructions Section */}
      <div className="bg-[#FDF3E3] text-center p-4 rounded-md mb-6">
        <p className="text-[#FF7F50] font-bold mb-2">
          Be yourself and answer honestly to find out your personality type!
        </p>
        <p className="text-[#8B4513] font-medium">
          In each of the questions choose the option which resonates with you the most.
        </p>
      </div>

      {/* Questionnaire Section */}
      <main className="flex flex-col gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#F6E8D9] p-4 rounded-lg border border-[#D6C4B3] flex items-center justify-between gap-4"
          >
            <p className="text-[#D33A33] font-bold">I wear my heart on my sleeve</p>

            <div className="flex items-center gap-4">
              <input type="radio" name={`question-${index}`} className="w-6 h-6 accent-[#D33A33]" />
              <input type="radio" name={`question-${index}`} className="w-6 h-6 accent-[#D6D6D6]" />
              <input type="radio" name={`question-${index}`} className="w-6 h-6 accent-[#D6D6D6]" />
              <input type="radio" name={`question-${index}`} className="w-6 h-6 accent-[#B86EB7]" />
            </div>

            <p className="text-[#B86EB7] font-bold">I keep my emotions under tight control</p>
          </div>
        ))}
      </main>

      {/* Progress Bar Section */}
      <div className="mt-8 w-full">
        <div className="relative h-6 rounded-full border-2 border-black overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#8B4513]"
            style={{ width: "25%" }}
          ></div>
        </div>
        <p className="text-center font-bold mt-2">25%</p>
      </div>
    </div>
  );
}
