// E:\programming\Project\ds_blog\backend\controllers\articleController.js

const { Article } = require('../models');

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.update(req.body, {
      where: { id: req.params.id }
    });
    if (article[0] !== 0) {
      res.status(200).json({ message: "Article updated successfully." });
    } else {
      res.status(404).json({ error: "Article not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const result = await Article.destroy({
      where: { id: req.params.id }
    });
    if (result !== 0) {
      res.status(200).json({ message: "Article deleted successfully." });
    } else {
      res.status(404).json({ error: "Article not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
