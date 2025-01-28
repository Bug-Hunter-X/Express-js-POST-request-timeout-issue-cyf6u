const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data asynchronously
  setTimeout(() => {
    console.log('Processing data:', data);
    res.send('Data received');
  }, 2000); // Simulate asynchronous operation
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});