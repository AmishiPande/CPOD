import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Archive from './pages/Archive.jsx';
import Submit from './pages/Submit.jsx';  
import PictureDetail from './pages/PictureDetail.jsx';
import Debug from './components/Debug';

function App() {
  console.log('App component rendered!'); // Should appear in console
  return (
    <Router basename="/CPOD">
      <Debug />
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
