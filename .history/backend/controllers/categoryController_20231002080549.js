E:\programming\Project\ds_blog\backend\controllers\categoryController.js

const { Category } = require('../models');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.update(req.body, {
            where: { id: req.params.id }
        });
        if (category[0] !== 0) {
            res.status(200).json({ message: "Category updated successfully." });
        } else {
            res.status(404).json({ error: "Category not found." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const result = await Category.destroy({
            where: { id: req.params.id }
        });
        if (result !== 0) {
            res.status(200).json({ message: "Category deleted successfully." });
        } else {
            res.status(404).json({ error: "Category not found." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategoryArticles = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, {
            include: 'articles'
        });
        if (category) {
            res.status(200).json(category.articles);
        } else {
            res.status(404).json({ error: "Category not found." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
