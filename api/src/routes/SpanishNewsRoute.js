const express = require('express');
const router = express.Router();
const SpanishNewsController = require('../controllers/SpanishNewsController');

// Define una ruta para obtener noticias en español
router.get('/espanol', SpanishNewsController.getSpanishNews);

module.exports = router;