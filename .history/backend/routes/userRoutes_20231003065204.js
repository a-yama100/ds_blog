// E:\programming\Project\ds_blog\backend\routes\userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/edit', userController.updateProfile);

module.exports = router;
