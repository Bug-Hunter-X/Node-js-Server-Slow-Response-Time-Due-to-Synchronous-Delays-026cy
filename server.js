const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Problem: The server takes 5 seconds to respond even when there's no actual work being done during the delay, leading to poor responsiveness and a bad user experience.  The solution is to use async/await in conjunction with promises.