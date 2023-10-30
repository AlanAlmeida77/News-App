const express = require('express');
const router = express.Router();
const SpanishNewsController = require('../controllers/SpanishNewsController');


router.get('/espanol', SpanishNewsController.getSpanishNews);

module.exports = router;