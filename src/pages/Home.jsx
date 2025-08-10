import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from your backend
    // For now, we'll use mock data
    const today = format(new Date(), 'yyyy-MM-dd');
    const mockData = require('../data.json');
    const todaysPicture = mockData.find(p => p.date === today) || mockData[0];
    
    setPicture(todaysPicture);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="picture-of-the-day">
          <h2>Picture of the Day: {picture.date}</h2>
          <img src={picture.url} alt={picture.title} />
          <h3>{picture.title}</h3>
          <p>{picture.explanation}</p>
          <p><strong>Credit:</strong> {picture.copyright || 'Public Domain'}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
