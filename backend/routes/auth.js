const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [
  // Example user: password is 'password' hashed
  { id: 1, username: 'user1', password: 'password', role: 'user' },
  { id: 2, username: '', password: 'password', role: 'admin' }
];

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  
  if (user &&  password) {
    const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
