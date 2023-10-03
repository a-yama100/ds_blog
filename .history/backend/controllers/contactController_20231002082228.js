// E:\programming\Project\ds_blog\backend\controllers\contactController.js

const { Contact } = require('../models');

exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 他の操作（例えば問い合わせ一覧の取得など）もここで実装できます
