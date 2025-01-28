# Express.js POST Request Timeout Issue

This repository demonstrates a common issue in Express.js applications where POST requests might time out if the request processing takes longer than the default timeout setting.  The issue is reproduced in `bug.js`. A solution is provided in `bugSolution.js`.

## Problem

The provided `bug.js` example uses `setTimeout` to simulate an asynchronous operation that takes 2 seconds. If a client sends a POST request to `/data`, the server will not respond within the default timeout period (often around 120 seconds), and the client will receive a timeout error.

## Solution

The `bugSolution.js` file illustrates how to increase the timeout limit, demonstrating a robust solution to prevent such timeouts. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies (if any).
4. Run `node bug.js`. 
5. Send a POST request to `http://localhost:3000/data` with some JSON data using tools such as Postman or curl. Observe the timeout after 120 seconds.
6. Run `node bugSolution.js`. 
7. Repeat step 5 to observe that the request is successfully processed. 