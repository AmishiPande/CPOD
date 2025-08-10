import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Space Pictures</h1>
        <nav>
          <ul>
            <li><Link to="/">Today's Picture</Link></li>
            <li><Link to="/archive">Archive</Link></li>
            <li><Link to="/submit">Submit a Picture</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
