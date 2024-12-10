import React, { useState, useRef } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import questions from "./questionsData";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionContainerRef = useRef(null);

  const handleOptionSelect = () => {
    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Scroll to the next question
      const questionElement = questionContainerRef.current.children[currentQuestionIndex + 1];
      questionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/results");// Navigate to results page if all questions are answered
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98e4d6] to-[#e5d1f9] p-6">
      {/* Header Section */}
      <header className="relative z-10 flex items-center justify-between mb-6">
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
      <main
        ref={questionContainerRef}
        className="flex flex-col gap-6 overflow-y-auto max-h-[500px]"
      >
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`bg-[#F6E8D9] p-4 rounded-lg border border-[#D6C4B3] flex items-center justify-between gap-4 transition-opacity duration-500 ${
              index === currentQuestionIndex ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
          >
            <p className="text-[#D33A33] font-bold w-1/4 text-right pr-4">{question.options[0].text}</p>

            <div className="flex justify-center items-center gap-2 w-2/4">
              {(question.bubbles || []).map((bubble, bubbleIndex) => (
                <input
                  key={bubbleIndex}
                  type="radio"
                  name={`question-${index}`}
                  className="rounded-full cursor-pointer"
                  style={{
                    backgroundColor: bubble.color,
                    width: bubble.size,
                    height: bubble.size,
                  }}
                  onChange={handleOptionSelect}
                />
              ))}
            </div>

            <p className="text-[#B86EB7] font-bold w-1/4 text-left pl-4">{question.options[1].text}</p>
          </div>
        ))}
      </main>

      {/* Progress Bar Section */}
      <div className="mt-8 w-full">
        <div className="relative h-6 rounded-full border-2 border-black overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#8B4513]"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-center font-bold mt-2">
          {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
        </p>
      </div>
    </div>
  );
}
