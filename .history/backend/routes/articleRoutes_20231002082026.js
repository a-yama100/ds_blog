// E:\programming\Project\ds_blog\backend\routes\articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const { upload } = require('../server');  // こちらを追加

router.get('/', articleController.getArticles);
router.post('/', upload.single('image'), articleController.createArticle);
router.put('/:id', upload.single('image'), articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
