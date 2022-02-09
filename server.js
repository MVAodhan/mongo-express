const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
