// E:\programming\Project\ds_blog\backend\routes\articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticles);
router.post('/', upload.single('image'), articleController.createArticle);

module.exports = router;
