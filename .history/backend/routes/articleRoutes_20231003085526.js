// E:\programming\Project\ds_blog\backend\routes\articleRoutes.js

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');
const upload = require('../uploadConfig');
const authenticate = require('../middlewares/auth');  // 既存の認証ミドルウェアをインポート

router.get('/', articleController.getArticles);
router.post('/', authenticate, upload.single('image'), articleController.createArticle);  // 認証ミドルウェアを適用
router.put('/:id', authenticate, upload.single('image'), articleController.updateArticle);  // 認証ミドルウェアを適用
router.delete('/:id', authenticate, articleController.deleteArticle);  // 認証ミドルウェアを適用

module.exports = router;
