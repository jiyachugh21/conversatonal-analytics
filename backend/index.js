const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Fake AI response logic
app.post('/api/ask', (req, res) => {
  const userQuestion = req.body.question;
  console.log('Received question:', userQuestion);

  let result;

  if (userQuestion.toLowerCase().includes("your name")) {
    result = [{ answer: "My name is DeepFraud Assistant." }];
  } else if (userQuestion.toLowerCase().includes("how are you")) {
    result = [{ answer: "I am doing great, thanks for asking!" }];
  } else if (userQuestion.toLowerCase().includes("what is fraud")) {
    result = [{ answer: "Fraud is any intentional act of deception for personal gain." }];
  } else {
    result = [{ answer: "Sorry, I can't answer that right now." }];
  }

  res.json({
    question: userQuestion,
    sqlResult: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
