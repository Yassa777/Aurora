import React, { useState, useEffect, useRef } from 'react';
import questions from './questionsData';
import personalityColors from './personalityColors';
import personalityDescriptions from './personalityDescriptions';
import Header from './header';
import GradientGenerator from './gradientGenerator';
import QuestionSlider from './QuestionSlider';

const PersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [personality, setPersonality] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const calculatePersonality = () => {
    const scores = {
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    };

    Object.entries(answers).forEach(([q, value]) => {
      const question = questions[parseInt(q)];
      const trait = question.trait;
      if (value < 0) {
        scores[trait[0]] += Math.abs(value);
      } else {
        scores[trait[1]] += value;
      }
    });

    const type = [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('');

    setPersonality({
      type,
      description: personalityDescriptions[type],
      colors: {
        dominant: personalityColors[type[0]],
        auxiliary: personalityColors[type[1]],
        tertiary: personalityColors[type[2]],
        inferior: personalityColors[type[3]]
      }
    });
    setShowResults(true);
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculatePersonality();
    }
  };

  if (showResults && personality) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Vibe
            </h2>
            <p className="text-5xl font-bold">{personality.type}</p>
            <p className="text-xl text-gray-600">{personality.description}</p>
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
    <div>
    <Header></Header>
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
              <QuestionSlider
                onAnswer={handleAnswer}
                left={question.left}
                right={question.right}
                hoveredValue={hoveredValue}
                setHoveredValue={setHoveredValue}
              />
              <p className="text-sm text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonalityQuiz;
