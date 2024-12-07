import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage.js";
import Questions from "./questions.js";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
  );
}

export default App;


