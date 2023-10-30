import { useState } from 'react';
import axios from 'axios';
import styles from './header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/news/search', {
        params: {
          query: searchTerm,
        },
      });

      const newsData = response.data;
      setSearchResults(newsData);
    } catch (error) {
      console.error('Error al buscar noticias:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Noticias</h1>
      <div className={styles.searchContainer}>
        <input
          className={styles.placeholder}
          type="text"
          placeholder="Buscar noticias"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Header;
