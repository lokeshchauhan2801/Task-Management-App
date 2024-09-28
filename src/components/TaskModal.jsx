import React, { useState } from 'react';
import Dropdown from './Dropdown';

const TaskModal = ({ isOpen, onClose }) => {
    const [assignedMembers, setAssignedMembers] = useState([]);
    const [dueDate, setDueDate] = useState('');
    const [estimatedHours, setEstimatedHours] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add task creation logic here
        console.log({ assignedMembers, dueDate, estimatedHours, priority, status });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Create New Task</h2>
                <form onSubmit={handleSubmit}>
                    <label>Assigned Members:</label>
                    <Dropdown
                        options={['Team Member 1', 'Team Member 2']}
                        onChange={(value) => setAssignedMembers(value)}
                        placeholder="Select Assigned Members"
                    />
                    
                    <label>Due Date:</label>
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

                    <label>Estimated Hours:</label>
                    <input
                        type="text"
                        value={estimatedHours}
                        onChange={(e) => setEstimatedHours(e.target.value)}
                        placeholder="Enter Hours"
                    />

                    <label>Status:</label>
                    <Dropdown
                        options={['Uninitiated', 'In Progress', 'Completed']}
                        onChange={(value) => setStatus(value)}
                        placeholder="Select Status"
                    />

                    <label>Priority:</label>
                    <Dropdown
                        options={['Low', 'Medium', 'High']}
                        onChange={(value) => setPriority(value)}
                        placeholder="Select Priority"
                    />

                    <button type="submit">Create Task</button>
                </form>
            </div>
        </div>
    );
};

export default TaskModal;
