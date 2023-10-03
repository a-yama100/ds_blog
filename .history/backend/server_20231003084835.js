// E:\programming\Project\ds_blog\backend\server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const categoryRoutes = require('./routes/categoryRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

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
const articleRoutes = require('./routes/articleRoutes');

app.use('/uploads', express.static('uploads'));  // 画像へのアクセスを許可
app.use('/articles', articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = { app, upload };

app.use('/categories', categoryRoutes);

app.use('/contact', contactRoutes);

app.use('/users', userRoutes);

app.use(cors());