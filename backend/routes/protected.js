const express = require('express');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');
const router = express.Router();

router.get('/user', authMiddleware, (req, res) => {
  res.send('User content');
});

router.get('/admin', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.send('Admin content');
});

module.exports = router;
