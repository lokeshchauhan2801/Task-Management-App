import React, { useState } from 'react';
import TaskTable from './TaskTable';
import TaskModal from './TaskModal';

const TaskManagement = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([
        { serialNo: 1, taskTitle: 'Task 1', taskId: '1', status: 'Uninitiated', assignedMembers: ['Team Member 1'], dueDate: '2024-12-31', estimatedHours: '3', priority: 'Low' },
        // Add more initial tasks as needed
    ]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="task-management">
            <button className="create-task-button" onClick={openModal}>
                CREATE NEW TASK <span>➕</span>
            </button>
            <TaskTable tasks={tasks} />
            <div className="pagination">
                <span className="page-item active">1</span>
                <span className="page-item">2</span>
                <span className="page-item">3</span>
                <span className="page-item">4</span>
            </div>
            <TaskModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default TaskManagement;
