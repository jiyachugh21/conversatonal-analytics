const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3001; // ✅ important change

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SQLite DB
const db = new sqlite3.Database('./mydb.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error('DB error:', err);
  console.log('Connected to SQLite database.');
});

// New POST route to handle question
app.post('/api/ask', (req, res) => {
  const userQuestion = req.body.question;
  console.log('Received question:', userQuestion);

  // For now, we fake a response. Later, you'll connect this to NLP + SQL
  const fakeSqlResult = [{ id: 1, name: 'John Doe', age: 30 }];

  res.json({
    question: userQuestion,
    sqlResult: fakeSqlResult,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


