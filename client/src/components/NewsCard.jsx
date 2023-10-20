import React from 'react';

const NewsCard = ({ title, description, imageUrl, url }) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
    </div>
  );
};

export default NewsCard;
