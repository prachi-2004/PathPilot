// server/routes/quiz.js
const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {
  const answers = req.body;
  console.log("📬 Received quiz answers:", answers);

  // Dummy response — later can include AI suggestions
  res.json({
    message: "Quiz submitted successfully!",
    receivedData: answers
  });
});

module.exports = router;