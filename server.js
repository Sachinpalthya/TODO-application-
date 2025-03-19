const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Create a TODO
app.post('/todos', 
  body('title').notEmpty().withMessage('Title is required'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title } = req.body;
    const todo = await prisma.todo.create({ data: { title } });
    res.json(todo);
});

// Get all TODOs
app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Update a TODO
app.put('/todos/:id', 
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('completed').isBoolean().withMessage('Completed must be true or false'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { title, completed }
    });
    res.json(updatedTodo);
});

// Delete a TODO
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.todo.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Todo deleted" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
