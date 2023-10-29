const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Ruta para buscar noticias por palabra clave
router.get('/search', searchController.searchNews);

module.exports = router;
