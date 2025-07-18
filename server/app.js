// server/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quiz');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', quizRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});