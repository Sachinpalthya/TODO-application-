"use client";
import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "@/utils/api";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() === "") return;
    await createTodo(newTodo);
    setNewTodo("");
    fetchTodos();
  };

  const handleUpdateTodo = async (id, completed, title = null) => {
    await updateTodo(id, title || todos.find(t => t.id === id).title, completed);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <h2>TODO App</h2>

      <TextField
        label="New Task"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleAddTodo}>
        Add Task
      </Button>

      <List sx={{ mt: 4 }}>
        {todos.map((todo) => (
          <ListItem key={todo.id} secondaryAction={
            <>
              <Checkbox checked={todo.completed} onChange={() => handleUpdateTodo(todo.id, !todo.completed)} />
              <IconButton edge="end" onClick={() => handleDeleteTodo(todo.id)}>
                <Delete color="error" />
              </IconButton>
            </>
          }>
            <ListItemText primary={todo.title} sx={{ textDecoration: todo.completed ? "line-through" : "none" }} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
