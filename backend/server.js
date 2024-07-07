const express = require('express');
require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received', data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
