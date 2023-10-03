// E:\programming\Project\ds_blog\backend\controllers\userController.js

const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user && user.validPassword(req.body.password)) {
            const token = jwt.sign(
                { userId: user.id }, 
                process.env.JWT_SECRET, 
                { expiresIn: '1h' } // トークンの有効期限を1時間に設定
            );
            res.status(200).json({ message: "ログイン成功", token: token });
        } else {
            res.status(401).json({ error: "認証失敗" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.logout = (req, res) => {
    // JWTやセッションを使用して、認証情報をクリアするロジックをここに追加
    res.status(200).json({ message: "ログアウト成功" });
};

exports.updateProfile = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.findOne({ where: { id: req.userId /* ここで認証済みのユーザーのIDを取得する */ } });

        if (user) {
            if (username) user.username = username;
            if (email) user.email = email;
            if (password) user.password = password;

            await user.save();

            res.status(200).json({ message: "情報更新成功" });
        } else {
            res.status(404).json({ error: "ユーザーが見つかりません" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

