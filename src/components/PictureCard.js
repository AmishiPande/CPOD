import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const PictureCard = ({ picture }) => {
  return (
    <div className="picture-card">
      <Link to={`/picture/${picture.date}`}>
        <img src={picture.url} alt={picture.title} />
        <h3>{picture.title}</h3>
        <p>{format(new Date(picture.date), 'MMMM d, yyyy')}</p>
      </Link>
    </div>
  );
};

export default PictureCard;
