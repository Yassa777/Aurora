import { Menu } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98e4d6] to-[#e5d1f9] p-6">
      {/* <header className="flex items-center justify-between mb-20">
        
        <h1 className="font-script text-4xl tracking-tighter">Aurora</h1>
        <button aria-label="Menu" className="p-2">
          <Menu size={24} />
        </button>
      </header> */}
      <header className="flex items-center justify-between mb-20">
        {/* Aurora Title with Gradient and Border */}
        <h1
        className="relative text-4xl font-script text-black px-4 py-2 bg-gradient-to-r from-[#e5d1f9] via-[#98e4d6] to-[#d5aaf0] rounded-md"
        >
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#e5d1f9] to-[#98e4d6] rounded-md blur-md" />
        Aurora
        </h1>

        {/* Menu Icon */}
        <button aria-label="Menu" className="p-2">
        <Menu size={24} />
        </button>
    </header>

      <main className="flex flex-col items-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          What color are you ?
        </h2>

        <div className="flex justify-center gap-8 mb-16">
          {/* Left card with multi-color gradient */}
          <div
            className="w-48 h-64 rounded-[20px] -rotate-12 shadow-lg"
            style={{
              background:
                "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C3EB, #936FDF)",
            }}
          />

          {/* Right card with teal gradient */}
          <div
            className="w-48 h-64 rounded-[20px] rotate-12 shadow-lg"
            style={{
              background: "linear-gradient(45deg, #20B2AA, #48D1CC)",
            }}
          />
        </div>

        <button 
        onClick={() => navigate("/questions")}
        className="bg-white text-[#FF7F50] font-semibold rounded-full px-12 py-4 mb-12 text-xl hover:bg-gray-50 transition-colors">
          Take the test!
        </button>

        <p className="text-center italic max-w-md text-lg">
          Only 10 minutes to get a "freakishly accurate" description of who you
          are and why you do things the way you do.
        </p>
      </main>
    </div>
  );
}