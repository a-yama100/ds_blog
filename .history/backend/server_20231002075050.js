// E:\programming\Project\ds_blog\backend\server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const articleRoutes = require('./routes/articleRoutes');
const bodyParser = require('body-parser');
const multer = require('multer');

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.use('/articles', articleRoutes);

// ブログ記事の投稿
// Body parserのセットアップ
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multerのセットアップ
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const upload = multer({ storage: storage });