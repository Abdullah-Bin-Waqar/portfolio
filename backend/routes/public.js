const express = require('express');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Skill = require('../models/Skill');
const Education = require('../models/Education');
const Certification = require('../models/Certification');
const Blog = require('../models/Blog');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
  res.json(projects);
});

router.get('/experiences', async (req, res) => {
  const experiences = await Experience.find().sort({ startDate: -1 });
  res.json(experiences);
});

router.get('/skills', async (req, res) => {
  const skills = await Skill.find().sort({ category: 1, name: 1 });
  res.json(skills);
});

router.get('/education', async (req, res) => {
  const education = await Education.find().sort({ createdAt: -1 });
  res.json(education);
});

router.get('/certifications', async (req, res) => {
  const certifications = await Certification.find().sort({ createdAt: -1 });
  res.json(certifications);
});

router.get('/blogs', async (req, res) => {
  const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
  res.json(blogs);
});

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const contact = await ContactMessage.create({ name, email, subject, message });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Unable to submit message', error: error.message });
  }
});

module.exports = router;
