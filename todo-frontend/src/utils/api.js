import axios from "axios";

const API_URL = "http://localhost:5000/todos"; // Update this when deployed

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const updateTodo = async (id, title, completed) => {
  const response = await axios.put(`${API_URL}/${id}`, { title, completed });
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
