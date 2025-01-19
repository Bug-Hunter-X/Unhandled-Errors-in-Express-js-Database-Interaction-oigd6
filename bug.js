const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // Missing error handling, should send an appropriate error response
      console.error(err);
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});