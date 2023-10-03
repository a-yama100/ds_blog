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

exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createArticle = async (req, res) => {
    try {
      const { title, content, categoryId } = req.body;
      const article = await Article.create({
        title,
        content,
        image: req.file.path,   // 画像のパスを保存
        categoryId
      });
      res.status(201).json(article);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  