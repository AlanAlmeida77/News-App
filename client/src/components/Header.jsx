import { useState } from 'react';
import axios from 'axios';
import styles from './header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/news/search', {
        params: {
          query: searchTerm,
        },
      });

      const newsData = response.data;
    } catch (error) {
      console.error('Error al buscar noticias:', error);
    }
  };

  return (
    <div className={styles['header']}>
      <h1>Noticias</h1>
      <input
        type="text"
        placeholder="Buscar noticias"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Header;
