const QuestionSlider = ({ onAnswer, left, right, hoveredValue, setHoveredValue }) => (
    <div className="flex justify-between items-center px-4">
      <p className="text-lg font-medium text-gray-600 w-1/3">{left}</p>
      <div className="w-1/3 flex justify-center space-x-3">
        {[-2, -1, 0, 1, 2].map((value) => (
          <button
            key={value}
            onMouseEnter={() => setHoveredValue(value)}
            onMouseLeave={() => setHoveredValue(null)}
            onClick={() => onAnswer(value)}
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
      <p className="text-lg font-medium text-gray-600 w-1/3">{right}</p>
    </div>
  );

export default QuestionSlider;