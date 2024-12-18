# Node.js Server Slow Response Time

This repository demonstrates a common Node.js issue: slow response times caused by synchronous delays in request handling. The `server.js` file shows the problematic code, where a 5-second delay blocks the event loop, making the server unresponsive. The `serverSolution.js` file provides a solution using async/await and Promises to handle asynchronous operations without blocking the event loop.