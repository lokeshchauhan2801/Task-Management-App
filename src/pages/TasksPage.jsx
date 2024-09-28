import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TasksTable";

const initialData = [
  {
    id: 1,
    title: "Implement user authentication",
    status: "In Progress",
    assignedMembers: ["John Doe", "Jane Smith"],
    dueDate: "2024-10-15",
    isAssigned: true,
    estimatedHours: "20:00", // Adjusted to match time format
    priority: "High",
    createdOn: "2024-09-28",
  },
  {
    id: 2,
    title: "Design landing page",
    status: "To Do",
    assignedMembers: ["Alice Johnson"],
    dueDate: "2024-10-05",
    isAssigned: true,
    estimatedHours: "15:00", // Adjusted to match time format
    priority: "Medium",
    createdOn: "2024-09-28",
  },
];

const TasksPage = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState(initialData);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleToggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
    setEditingTask(null); // Reset editing task when toggling modal
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsTaskModalOpen(true); // Open modal for editing
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-medium mb-4">Task Management</h1>
        <button className="btn-primary" onClick={handleToggleTaskModal}>
          Create Task
        </button>
      </div>

      <div className="min-h-[calc(100vh-100px)]">
        <TaskTable tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      </div>

      {isTaskModalOpen && (
        <TaskForm
          onSaveClick={editingTask ? updateTask : addTask}
          onCancelClick={handleToggleTaskModal}
          initialValues={editingTask} // Pass initial values for editing
        />
      )}
    </div>
  );
};

export default TasksPage;
