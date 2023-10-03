// E:\programming\Project\ds_blog\backend\server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

const articleRoutes = require('./routes/articleRoutes');

app.use('/articles', articleRoutes);
