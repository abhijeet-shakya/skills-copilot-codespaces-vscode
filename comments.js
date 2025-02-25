// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comment array
const comments = [
  {
    id: 1,
    username: 'Alice',
    comment: 'Hello!'
  },
  {
    id: 2,
    username: 'Bob',
    comment: 'Hi!'
  }
];

// Create GET route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create GET route to get comment by ID
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});