// E:\programming\Project\ds_blog\backend\server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const upload = require('./uploadConfig');

// Body parserのセットアップ
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const articleRoutes = require('./routes/articleRoutes');

app.use('/uploads', express.static('uploads'));  // 画像へのアクセスを許可
app.use('/articles', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.use('/categories', categoryRoutes);

app.use('/contact', contactRoutes);

app.use('/users', userRoutes);

app.use(cors());

module.exports = { app, upload };

