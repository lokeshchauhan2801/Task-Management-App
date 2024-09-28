import React from 'react';

const TaskTable = ({ tasks }) => {
    return (
        <table className="task-table">
            <thead className="table-header">
                <tr>
                    <th>Order</th>
                    <th>Serial No.</th>
                    <th>Task Title</th>
                    <th>Task ID</th>
                    <th>Status</th>
                    <th>Assigned Members</th>
                    <th>Due Date</th>
                    <th>Estimated Hours</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{task.serialNo}</td>
                        <td>{task.taskTitle}</td>
                        <td>{task.taskId}</td>
                        <td>{task.status}</td>
                        <td>{task.assignedMembers.join(', ')}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.estimatedHours}</td>
                        <td>{task.priority}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
