const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const newsRoutes = require('./src/routes/newsRoutes');
const searchRoutes = require('./src/routes/searchRoute');
const spanishNews = require('./src/routes/SpanishNewsRoute')

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);
app.use('/api/news', searchRoutes);
app.use('/api/news', spanishNews);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
