import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("http://localhost:5000/generate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image_path: "gradient.jpg", prompt: "unique gradient" }),
        });
        const blob = await response.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98e4d6] to-[#e5d1f9] p-6 flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="relative z-10 flex items-center justify-between mb-6">
        <h1
          className="relative text-4xl font-script text-black px-4 py-2 bg-gradient-to-r from-[#e5d1f9] via-[#98e4d6] to-[#d5aaf0] rounded-md"
        >
          Aurora
        </h1>

        <button aria-label="Menu" className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      {/* Orange/White Separator */}
      <div className="h-[4px] bg-gradient-to-r from-[#FF7F50] to-white mb-8 w-full" />

      {/* Results Section */}
      <div className="bg-[#FDF3E3] p-6 rounded-md w-full max-w-md text-center flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8">Your Results</h1>
        <p className="text-xl text-center max-w-lg mb-8">
          Thank you for completing the questionnaire! Based on your answers, here's a summary of your personality type.
        </p>
        {/* Placeholder for Image */}
        <div className="w-64 h-96 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
        {imageUrl ? <img src={imageUrl} alt="Generated Gradient" /> : <p>Loading...</p>}
        </div>

        {/* Personality Type */}
        <h2 className="text-2xl font-bold text-black mb-2">ESFP</h2>

        {/* Name */}
        <h3 className="text-xl font-script text-black mb-6">Serxho</h3>

        {/* Sign Up Section */}
        <p className="text-sm font-medium text-gray-700 mb-2">Sign up to save results:</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-gray-400 rounded-md px-4 py-2 w-3/4 mb-6"
        />

        <button
          onClick={() => navigate("/")}
          className="bg-[#FF7F50] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#e56747] transition-colors"
        >
          Retake the Test
        </button>
      </div>
    </div>
  );
}
