const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const path = require('path');
const dbPath = path.join(__dirname, 'mydb.sqlite');
const db = new Database(dbPath, { verbose: console.log });
// Connect to DB


// Test route
app.post('/api/ask', (req, res) => {
  const userQuestion = req.body.question;
  console.log('Received question:', userQuestion);

  // Example response — replace with real logic later
  const stmt = db.prepare('SELECT * FROM users LIMIT 1');
  const result = stmt.all();

  res.json({
    question: userQuestion,
    sqlResult: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
