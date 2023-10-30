const axios = require('axios');

async function getNews(req, res) {
  const apiKey = '5d9107bfdcab43ac9fe7db7c13dde5ef'; 
  const country = 'ar';
  const category = 'general';

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
    const newsData = response.data;
    res.json(newsData);
  } catch (error) {
    console.error('Error al obtener noticias:', error);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
}

module.exports = {
  getNews,
};
