import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import ResultsCard from './resultsCard';

const Results = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#98e4d6] to-[#e5d1f9] p-6 flex flex-col items-center justify-center">
      <Header />
      <div className="h-[4px] bg-gradient-to-r from-[#FF7F50] to-white mb-8 w-full" />
      <ResultsCard onRetake={() => navigate('/')} />
    </div>
  );
};

export default Results;

