import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    left: "I feel alive at parties",
    right: "I'm happiest in my cozy room",
    trait: ["E", "I"],
    emoji: "🎉"
  },
  {
    id: 2,
    left: "I trust my experiences",
    right: "I trust my intuition",
    trait: ["S", "N"],
    emoji: "🤔"
  },
  {
    id: 3,
    left: "Logic guides my decisions",
    right: "I follow my heart",
    trait: ["T", "F"],
    emoji: "💭"
  },
  {
    id: 4,
    left: "I like planning ahead",
    right: "I go with the flow",
    trait: ["J", "P"],
    emoji: "📝"
  },
  {
    id: 5,
    left: "Facts over possibilities",
    right: "Possibilities over facts",
    trait: ["S", "N"],
    emoji: "✨"
  }
];

const personalityColors = {
  E: '#ff7676',
  I: '#f7d794',
  S: '#f3a683',
  N: '#778beb',
  T: '#cf6a87',
  F: '#786fa6',
  J: '#63cdda',
  P: '#ea8685',
};

// GradientGenerator component remains the same

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [personality, setPersonality] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // calculatePersonality function remains the same

  if (showResults && personality) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Vibe
            </h2>
            <p className="text-5xl font-bold">{personality.type}</p>
          </div>
          <GradientGenerator colors={personality.colors} />
          <button 
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
              setPersonality(null);
            }}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl text-lg font-medium hover:opacity-90 transition-opacity"
          >
            ✨ Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-4xl">{question.emoji}</span>
            <div className="h-1 w-full bg-gray-100 rounded-full">
              <div 
                className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="text-center space-y-6">
              <div className="flex justify-between items-center px-4">
                <p className="text-lg font-medium text-gray-600 w-1/3">{question.left}</p>
                <div className="w-1/3 flex justify-center space-x-3">
                  {[-2, -1, 0, 1, 2].map((value) => (
                    <button
                      key={value}
                      onMouseEnter={() => setHoveredValue(value)}
                      onMouseLeave={() => setHoveredValue(null)}
                      onClick={() => handleAnswer(value)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg transition-all duration-200 ${
                        hoveredValue === value 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white transform scale-110' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {value === 0 ? "•" : value > 0 ? "→" : "←"}
                    </button>
                  ))}
                </div>
                <p className="text-lg font-medium text-gray-600 w-1/3">{question.right}</p>
              </div>
              
              <p className="text-sm text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;