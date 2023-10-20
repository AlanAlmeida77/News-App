const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsControllers');

// Ruta para obtener noticias en español
router.get('/spanish-news', newsController.getSpanishNews);

module.exports = router;
