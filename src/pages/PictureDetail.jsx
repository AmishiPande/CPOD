import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PictureDetail = () => {
  const { date } = useParams();
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from your backend
    const mockData = require('../data.json');
    const foundPicture = mockData.find(p => p.date === date);
    
    setPicture(foundPicture);
    setLoading(false);
  }, [date]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!picture) {
    return <div>Picture not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="picture-of-the-day">
          <h2>{format(new Date(picture.date), 'MMMM d, yyyy')}</h2>
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

export default PictureDetail;
