import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';  // Updated
import Archive from './pages/Archive.jsx';  // Updated
import Submit from './pages/Submit.jsx';  // Updated
import PictureDetail from './pages/PictureDetail.jsx';  // Updated

function App() {
  return (
    <Router basename="/CPOD">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/picture/:date" element={<PictureDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
