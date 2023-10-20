const axios = require('axios');

const API_BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '5d9107bfdcab43ac9fe7db7c13dde5ef';


exports.getSpanishNews = async (req, res) => {
  try {

    const response = await axios.get(`${API_BASE_URL}/everything`, {
      params: {
        q: 'bitcoin', 
        language: 'es', 
        apiKey: API_KEY,
        pageSize: 20,
        sortBy: 'publishedAt',
      },
    });


    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener noticias en español' });
  }
};
