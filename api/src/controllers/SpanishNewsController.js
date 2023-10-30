const axios = require('axios');

const apiKey = '5d9107bfdcab43ac9fe7db7c13dde5ef';

exports.getSpanishNews = async (req, res) => {
  try {
    const language = 'es'; 
    const pageSize = 10; 
    const searchQuery = 'noticias en español';

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
      res.json(response.data.articles);
    } else {
      res.status(500).json({ error: 'Error al obtener noticias en español' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener noticias en español' });
  }
};

