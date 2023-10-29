import { useState } from 'react';
import axios from 'axios';
import styles from './header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/news/search', {
        params: {
          query: searchTerm, // Envia el término de búsqueda al backend
        },
      });

      const newsData = response.data;
      // Aquí puedes manejar los datos de noticias obtenidos del backend
    } catch (error) {
      console.error('Error al buscar noticias:', error);
    }
  };

  return (
    <div className={styles['header']}>
      <h1>Noticias sobre Bitcoin</h1>
      <input
        type="text"
        placeholder="Buscar noticias de Bitcoin"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Header;
