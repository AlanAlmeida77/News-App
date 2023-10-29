const axios = require('axios');

const apiKey = '5d9107bfdcab43ac9fe7db7c13dde5ef'; // Reemplaza 'TU_API_KEY' con tu clave de API de NewsAPI

exports.getSpanishNews = async (req, res) => {
  try {
    const language = 'es'; // Configura el idioma en español
    const pageSize = 10; // Puedes ajustar la cantidad de resultados que deseas
    const searchQuery = 'noticias en español'; // Puedes ajustar la consulta de búsqueda

    const apiUrl = 'https://newsapi.org/v2/everything';

    const response = await axios.get(apiUrl, {
      params: {
        apiKey: apiKey,
        language: language,
        pageSize: pageSize,
        q: searchQuery,
      },
    });

    if (response.data.status === 'ok') {
      // Devuelve los artículos en formato JSON
      res.json(response.data.articles);
    } else {
      // En caso de error, devuelve un mensaje de error
      res.status(500).json({ error: 'Error al obtener noticias en español' });
    }
  } catch (error) {
    // En caso de excepción, devuelve un mensaje de error
    res.status(500).json({ error: 'Error al obtener noticias en español' });
  }
};

