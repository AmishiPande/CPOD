import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          CPOD. Inspired by <a href="https://apod.nasa.gov/apod/astropix.html">APOD</a>.
        </p>
        <h5>
          &copy; {new Date().getFullYear()} A race of cat-human-hybrid-astrology-hating-astronomy-plus-physics-freaks.
        </h5>
        <h6>This is not a real copyright tho-</h6>
      </div>
    </footer>
  );
};

export default Footer;
