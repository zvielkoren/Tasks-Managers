import React from 'react';

interface Task {
  taskId: string;
  taskName: string;
  category: string;
  projectId: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  contact?: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.taskId}>
          <p>Task Name: {task.taskName}</p>
          <p>Category: {task.category}</p>
          <p>Project ID: {task.projectId}</p>
          <p>Start Date: {task.startDate}</p>
          <p>End Date: {task.endDate}</p>
          {task.location && <p>Location: {task.location}</p>}
          {task.contact && <p>Contact: {task.contact}</p>}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
