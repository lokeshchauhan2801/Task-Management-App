import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TasksTable";
import { createTask, getTasks } from "../utils/taskStorage";
const data = [
  {
    id: 1,
    title: "Implement user authentication",
    status: "In Progress",
    assignedMembers: ["John Doe", "Jane Smith"],
    dueDate: "2024-10-15",
    isAssigned: "true",
    estimatedHours: 20,
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
    estimatedHours: 15,
    priority: "Medium",
    createdOn: "2024-09-28",
  },
];
const TasksPage = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  // console.log(getTasks());
  
  const [tasks, setTasks] = useState(getTasks());

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };
  const handleToggleTaskModal = () => [setIsTaskModalOpen(!isTaskModalOpen)];
  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-medium mb-4">Task Management</h1>
        <button className="btn-primary" onClick={handleToggleTaskModal}>
          Create Task
        </button>
      </div>

      <div className="min-h-[calc(100vh-100px)]">
        <TaskTable tasks={tasks} />
      </div>

      {isTaskModalOpen && (
        <TaskForm
          onSaveClick={addTask}
          onCancelClick={handleToggleTaskModal}
          onSubmit={(task) => {
            createTask(task);
            location.reload();
          }}
        />
      )}
    </div>
  );
};

export default TasksPage;
