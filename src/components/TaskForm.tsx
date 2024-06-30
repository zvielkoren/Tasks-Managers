import React, { useState, FormEvent } from 'react';

interface TaskFormProps {
  addTask: (task: Task) => void;
}

interface Task {
  taskId: string;
  taskName: string;
  category: string;
  projectId: string;
  startDate: string;
  endDate: string;
  location?: string;
  contact?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskId, setTaskId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('');
  const [projectId, setProjectId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({
      taskId,
      taskName,
      category,
      projectId,
      startDate,
      endDate,
      location,
      contact,
    });
    setTaskId('');
    setTaskName('');
    setCategory('');
    setProjectId('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Id"
        value={taskId}
        onChange={(e) => setTaskId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
