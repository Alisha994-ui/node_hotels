const express = require('express');
const app = express();
const db = require('./db'); // MongoDB connection

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000');
});

app.use(express.json()); // Body parser

app.use('/person', require('./personroutes')); // Person routes
// Home route
