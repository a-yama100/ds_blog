// E:\programming\Project\ds_blog\frontend\src\components\RichTextEditor.js

const sanitizeHtml = require('sanitize-html');

exports.createArticle = async (req, res) => {
    try {
        const { title, categoryId } = req.body;
        let { content } = req.body;

        // サニタイズ
        content = sanitizeHtml(content);

        const image = req.file ? req.file.path : null;
        const article = await Article.create({
            title,
            content,
            image,
            categoryId
        });

        res.status(201).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
