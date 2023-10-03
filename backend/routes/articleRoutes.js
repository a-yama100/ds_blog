// E:\programming\Project\ds_blog\backend\routes\articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const upload = require('../uploadConfig');
const authenticate = require('../middlewares/auth');

router.get('/', articleController.getArticles);
router.post('/', authenticate, upload.single('image'), articleController.createArticle);
router.put('/:id', authenticate, upload.single('image'), articleController.updateArticle);
router.delete('/:id', authenticate, articleController.deleteArticle);

module.exports = router;
