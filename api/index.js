const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Registrar las rutas de noticias
const newsRoutes = require('./src/routes/newsRoutes');
app.use('/api/news', newsRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
