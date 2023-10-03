// E:\programming\Project\ds_blog\backend\controllers\userController.js

const { User } = require('../models');

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user && user.validPassword(req.body.password)) {
            // JWTやセッションを使用して、認証情報を保存するロジックをここに追加
            res.status(200).json({ message: "ログイン成功" });
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
