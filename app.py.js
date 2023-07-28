const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming JSON data
app.use(bodyParser.json());

// Store todo items in an array
const todos = [];

// POST endpoint to add a new todo item
app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Add the new todo item to the array
  todos.push({ text });

  return res.json({ message: 'Todo item added successfully', todo: { text } });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});