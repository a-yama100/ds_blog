// E:\programming\Project\ds_blog\backend\routes\userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/edit', authMiddleware, userController.updateProfile); // ここでミドルウェアを適用

module.exports = router;
