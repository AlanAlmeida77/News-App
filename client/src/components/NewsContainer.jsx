// NewsContainer.jsx

import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import axios from 'axios';
import styles from './NewsContainer.module.css'; // Importa el archivo CSS Module para NewsContainer

const NewsContainer = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/news/espanol')
      .then((response) => {
        if (response.data) {
          setNewsData(response.data);
        }
      })
      .catch((error) => {
        console.error('Error al obtener noticias en español:', error);
      });
  }, []);

  return (
    <div className={styles['news-container']}>
      <h1>Noticias en Español</h1>
      <Cards news={newsData} />
    </div>
  );
};

export default NewsContainer;

