const axios = require('axios');

const API_BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '5d9107bfdcab43ac9fe7db7c13dde5ef';

// Controlador para obtener noticias en español
exports.getSpanishNews = async (req, res) => {
  try {
    // Realiza una solicitud a la API de newsapi.org para obtener noticias en español
    const response = await axios.get(`${API_BASE_URL}/everything`, {
      params: {
        q: 'bitcoin', // Palabra clave para buscar noticias sobre Bitcoin
        language: 'es', // Código de idioma para español
        apiKey: API_KEY,
        pageSize: 20,
        sortBy: 'publishedAt',
      },
    });

    // Devuelve las noticias en español como respuesta
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener noticias en español' });
  }
};
