const axios = require('axios');

async function searchNews(req, res) {
  const { query } = req.query; // Obtiene la palabra clave de la consulta

  if (!query) {
    // Verifica si la palabra clave está presente en la consulta
    return res.status(400).json({ error: 'Palabra clave faltante' });
  }

  try {
    const apiKey = '5d9107bfdcab43ac9fe7db7c13dde5ef'; // Reemplaza con tu clave API de NewsAPI.org
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        apiKey,
        language: 'es',
        sortBy: 'publishedAt',
        q: query, // Utiliza la palabra clave proporcionada en la consulta
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
