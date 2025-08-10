import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>CPOD. Inspired by <a href="https://apod.nasa.gov/apod/astropix.html">APOD</a>.
          <br><h5>&copy; {new Date().getFullYear()} A race of cat-human-hybrid-astrology-hating-astronomy-plus-physics-freaks.</h5>
          <br><h6>This is not a real copyright tho-</h6></p>
      </div>
    </footer>
  );
};

export default Footer;
