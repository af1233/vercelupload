const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'test' && password === 'test') {
        return res.status(200).json({ message: 'Login successful' });
    }
    res.status(401).json({ message: 'Login failed' });
});

module.exports = app;
