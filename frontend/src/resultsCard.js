import GradientGenerator from './gradientGenerator';

const ResultsCard = ({ onRetake }) => (
  <div className="bg-[#FDF3E3] p-6 rounded-md w-full max-w-md text-center flex flex-col items-center">
    <h1 className="text-5xl font-bold mb-8">Your Results</h1>
    <p className="text-xl text-center max-w-lg mb-8">
      Thank you for completing the questionnaire! Based on your answers, here's a summary of your personality type.
    </p>

    <div className="mb-6">
      <GradientGenerator
        colors={{
          topLeft: '#ff7676',
          topRight: '#f7d794',
          bottomLeft: '#f3a683',
          bottomRight: '#ffb8b8',
        }}
      />
    </div>

    <h2 className="text-2xl font-bold text-black mb-2">ESFP</h2>
    <h3 className="text-xl font-script text-black mb-6">Serxho</h3>

    <p className="text-sm font-medium text-gray-700 mb-2">Sign up to save results:</p>
    <input
      type="text"
      placeholder="Enter your email"
      className="border border-gray-400 rounded-md px-4 py-2 w-3/4 mb-6"
    />
    <button
      onClick={onRetake}
      className="bg-[#FF7F50] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#e56747] transition-colors"
    >
      Retake the Test
    </button>
  </div>
);

export default ResultsCard;
