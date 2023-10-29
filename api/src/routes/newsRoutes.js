const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsControllers');


router.get('/general', newsController.getNews);

module.exports = router;

