import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PictureCard from '../components/PictureCard';

const Archive = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from your backend
    const mockData = require('../data.json');
    setPictures(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Archive</h2>
        <div className="archive-grid">
          {pictures.map(picture => (
            <PictureCard key={picture.date} picture={picture} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Archive;
