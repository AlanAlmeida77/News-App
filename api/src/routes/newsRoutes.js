const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsControllers');

router.get('/spanish-news', newsController.getSpanishNews);

module.exports = router;
