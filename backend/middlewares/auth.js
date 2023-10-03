// E:\programming\Project\ds_blog\backend\middlewares\auth.js

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"の形式を想定
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRETは.envファイルに保存
        req.userId = decoded.userId; // ペイロードからユーザーIDを取得
        next();
    } catch (error) {
        res.status(401).json({ message: '認証に失敗しました' });
    }
};
