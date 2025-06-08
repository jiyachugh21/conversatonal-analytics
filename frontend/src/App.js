import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await fetch('http://localhost:3001/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const result = await response.json();
    setAnswer(
      `You asked: "${result.question}".\nSQL result: ${JSON.stringify(result.sqlResult)}`
    );
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      <button onClick={handleAsk}>Ask</button>
      <pre>{answer}</pre>
    </div>
  );
}

export default App;
