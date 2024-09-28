const TaskTable = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Task Title</th>
            <th>Task ID</th>
            <th>Status</th>
            <th>Assigned Members</th>
            <th>Due Date</th>
            <th>Is Assigned</th>
            <th>Estimated Hours</th>
            <th>Priority</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {tasks?.map((task, index) => (
            <tr
              key={task.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {index + 1}
              </td>
              <td>{task.title}</td>
              <td>{task.id}</td>
              <td>{task.status}</td>
              <td>{task.assignedMembers.join(", ")}</td>
              <td>{task.dueDate}</td>
              <td>{task.isAssigned ? "Yes" : "No"}</td>
              <td>{task.estimatedHours}</td>
              <td>{task.priority}</td>
              <td>{new Date(task.id).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
