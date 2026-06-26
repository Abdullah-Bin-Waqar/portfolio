const express = require('express');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Skill = require('../models/Skill');
const Education = require('../models/Education');
const Certification = require('../models/Certification');
const Blog = require('../models/Blog');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const createCrudRoutes = (Model, routeName) => {
  router.get(`/${routeName}`, requireAdmin, async (req, res) => {
    const items = await Model.find().sort({ createdAt: -1 });
    res.json(items);
  });

  router.post(`/${routeName}`, requireAdmin, async (req, res) => {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  });

  router.put(`/${routeName}/:id`, requireAdmin, async (req, res) => {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  });

  router.delete(`/${routeName}/:id`, requireAdmin, async (req, res) => {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: `${routeName.slice(0, -1)} deleted` });
  });
};

createCrudRoutes(Project, 'projects');
createCrudRoutes(Experience, 'experiences');
createCrudRoutes(Skill, 'skills');
createCrudRoutes(Education, 'education');
createCrudRoutes(Certification, 'certifications');
createCrudRoutes(Blog, 'blogs');

router.get('/messages', requireAdmin, async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(messages);
});

router.put('/messages/:id/read', requireAdmin, async (req, res) => {
  const message = await ContactMessage.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  res.json(message);
});

module.exports = router;
