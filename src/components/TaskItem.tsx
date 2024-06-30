import React from 'react';

interface Task {
  taskId: number;
  taskName: string;
  category: string;
  projectId: number;
  startDate?: string;
  endDate?: string;
  location?: string;
  contact?: string;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <li>
      <h3>{task.taskName}</h3>
      <p>Category: {task.category}</p>
      <p>Project ID: {task.projectId}</p>
      {task.startDate && <p>Start Date: {task.startDate}</p>}
      {task.endDate && <p>End Date: {task.endDate}</p>}
      {task.location && <p>Location: {task.location}</p>}
      {task.contact && <p>Contact: {task.contact}</p>}
    </li>
  );
};

export default TaskItem;
