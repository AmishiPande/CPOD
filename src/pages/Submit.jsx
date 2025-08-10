import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    url: '',
    explanation: '',
    copyright: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert('Submission received! (This is a demo - data not saved)');
    console.log('Submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      date: '',
      url: '',
      explanation: '',
      copyright: ''
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Submit a Picture</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="url">Image URL:</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="explanation">Explanation:</label>
            <textarea
              id="explanation"
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="copyright">Copyright (optional):</label>
            <input
              type="text"
              id="copyright"
              name="copyright"
              value={formData.copyright}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit Picture</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
