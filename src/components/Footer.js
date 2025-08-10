import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Space Pictures. Inspired by NASA APOD.</p>
      </div>
    </footer>
  );
};

export default Footer;
