import { Menu } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import selfieOne from "./assets/images/selfie-one.jpg";
import selfieTwo from "./assets/images/selfie-two.jpg";
import AuroraLogo from "./assets/images/Aurora.svg";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  p-6">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-10">
     {/* Logo with Gradient */}
  <div className="relative">
    <img
      src={AuroraLogo}
      alt="Aurora Logo"
      className="w-64 h-auto relative "
    />
  </div>

        <button aria-label="Menu" className="p-2">
          <Menu size={24} />
        </button>
      </header>

      {/* Orange/White Separator */}
      <div className="h-[4px] bg-gradient-to-r from-[#FF7F50] to-white mb-8" />

      {/* Main Content */}
      <main className="flex flex-col items-center max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          What color are you ?
        </h2>

        {/* Cards Section */}
        <div className="flex justify-center gap-44 mb-16 flex-wrap">
          {/* Left Group */}
          <div className="relative w-48 h-64">
            {/* Gradient Card */}
            <div
              className="absolute -top-2 left-20 w-full h-full rounded-[20px] -rotate-0 z-10"
              style={{
                background:
                  "linear-gradient(45deg, #FF0000, #FFFFFF)",
              }}
            />
            {/* Image Card */}
            <div
              className="relative w-full h-full rounded-[20px] -rotate-12 z-20"
              style={{
                backgroundImage: `url(${selfieOne})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Right Group */}
          <div className="relative w-48 h-64">
            {/* Gradient Card */}
            <div
              className="absolute top-4 left-20 w-full h-full rounded-[20px] rotate-12 z-10"
              style={{
                background: "linear-gradient(45deg, #FFC1CC, #8B4513)",
              }}
            />
            {/* Image Card */}
            <div
              className="relative w-full h-full rounded-[20px] rotate-12 z-20"
              style={{
                backgroundImage: `url(${selfieTwo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        {/* Call to Action */}
        <button
          onClick={() => navigate("/questions")}
          className="bg-white text-[#FF7F50] font-semibold rounded-full px-12 py-4 mb-12 text-xl hover:bg-gray-50 transition-colors"
        >
          Take the test!
        </button>

        {/* Description */}
        <p className="text-center italic max-w-md text-lg">
          Only 10 minutes to get a "freakishly accurate" description of who you
          are and why you do things the way you do.
        </p>
      </main>
    </div>
  );
}