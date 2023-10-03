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

// Body parserのセットアップ
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));