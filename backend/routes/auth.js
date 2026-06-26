const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtSecret, adminEmail } = require('../config');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, jwtSecret, { expiresIn: '8h' });
    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Login error', error: error.message });
  }
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (email !== adminEmail) return res.status(403).json({ message: 'Registration disabled' });
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: 'User already exists' });
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash, role: 'admin' });
    res.status(201).json({ message: 'Admin user created', user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Registration error', error: error.message });
  }
});

module.exports = router;
