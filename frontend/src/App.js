import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage.js";
import Questions from "./questions.js";
import Results from "./results.js"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>
  );
}

export default App;


