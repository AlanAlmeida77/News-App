const axios = require('axios');

async function searchNews(req, res) {
  const { query } = req.query; 

  if (!query) {
    return res.status(400).json({ error: 'Palabra clave faltante' });
  }

  try {
    const apiKey = '5d9107bfdcab43ac9fe7db7c13dde5ef';
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey,
        language: 'es',
        sortBy: 'publishedAt',
        q: query,
      },
    });

    const newsData = response.data.articles;
    res.json(newsData);
  } catch (error) {
    console.error('Error al buscar noticias:', error);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
}

module.exports = {
  searchNews,
};
