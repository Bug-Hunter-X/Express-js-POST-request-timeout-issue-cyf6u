const express = require('express');
const app = express();
app.use(express.json());

// Increase the request timeout
app.use((req, res, next) => {
  req.setTimeout(5000); // Set timeout to 5 seconds
  next();
});

app.post('/data', (req, res) => {
  const data = req.body;
  setTimeout(() => {
    console.log('Processing data:', data);
    res.send('Data received');
  }, 2000); // Simulate asynchronous operation
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});