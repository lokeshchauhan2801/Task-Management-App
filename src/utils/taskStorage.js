// taskStorage.js

// Key to be used in localStorage
const STORAGE_KEY = "taskList";

// Get the list of tasks from localStorage
export const getTasks = () => {
  const tasks = localStorage.getItem(STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

// Save the list of tasks to localStorage
const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// Create a new task and add it to localStorage
export const createTask = (newTask) => {
  const tasks = getTasks();
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
};

// Get a single task by ID
export const getTaskById = (id) => {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id);
};

// Update a task by ID
export const updateTask = (id, updatedTaskData) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTaskData };
    saveTasks(tasks);
    return tasks[index];
  }
  return null; // Return null if the task wasn't found
};

// Delete a task by ID
export const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
};

// Clear all tasks from localStorage
export const clearAllTasks = () => {
  localStorage.removeItem(STORAGE_KEY);
};
