const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const newsRoutes = require('./src/routes/newsRoutes');
const searchRoutes = require('./src/routes/searchRoute');

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);
app.use('/api/news', searchRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
