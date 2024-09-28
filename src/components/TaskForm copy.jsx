// components/TaskForm.jsx
import { useState } from "react";
import FormInputWrapper from "./FormInputWrapper";
import ModalWrapper from "./ModalWrapper";
import Dropdown from "./Dropdown";

const memberOptions = [
  { label: "Team Member 1", value: "member1" },
  { label: "Team Member 2", value: "member2" },
  { label: "Team Member 3", value: "member3" },
  { label: "Team Member 4", value: "member4" },
];
const statusOptions = [
  { label: "Uninitiated", value: "uninitiated" },
  { label: "In Progress", value: "inprogress" },
  { label: "Completed", value: "completed" },
];
const priorityOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];
const assignedOptions = [
  { label: "True", value: "true" },
  { label: "False", value: "false" },
];

// eslint-disable-next-line react/prop-types
const TaskForm = ({ onSaveClick, onCancelClick }) => {
  const [task, setTask] = useState({
    title: "",
    status: "To Do",
    assignedMembers: [],
    dueDate: "",
    isAssigned: false,
    estimatedHours: 0,
    priority: "Low",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSave = () => {
    onSaveClick(task); // Call the passed onSaveClick function with the task data
    setTask({
      title: "",
      status: "To Do",
      assignedMembers: [],
      dueDate: "",
      isAssigned: false,
      estimatedHours: 0,
      priority: "Low",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(); // Call the handleSave function
  };

  return (
    <ModalWrapper>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-medium mb-4 p-3">Create New Task</h2>
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] px-5">
          <FormInputWrapper title="Task title">
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task Title"
            />
          </FormInputWrapper>

          <FormInputWrapper title="Status">
            <Dropdown options={statusOptions} placeholder="Select Status" />
          </FormInputWrapper>
          <FormInputWrapper title="Assigned Members">
            <Dropdown
              options={memberOptions}
              placeholder="Select Assigned Members"
              multiselect
            />
          </FormInputWrapper>

          <FormInputWrapper title="Is Assigned">
            <Dropdown options={assignedOptions} placeholder="Is Assigned" />
          </FormInputWrapper>
          <FormInputWrapper title="Select Priority">
            <Dropdown options={priorityOptions} placeholder="Select Priority" />
          </FormInputWrapper>

          <FormInputWrapper title="Due Date">
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
          </FormInputWrapper>

          <FormInputWrapper title="Estimated Hours">
            <input
              type="time"
              name="estimatedHours"
              value={task.estimatedHours}
              onChange={handleChange}
              placeholder="HH:MM"
            />
          </FormInputWrapper>
        </div>
        <div className="flex flex-row-reverse mt-4">
          <button type="submit" className="btn-green min-w-20 uppercase">
            Save
          </button>
          <button
            type="button"
            className="btn-gray min-w-20 uppercase me-3"
            onClick={() => {
              onCancelClick && onCancelClick();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default TaskForm;
