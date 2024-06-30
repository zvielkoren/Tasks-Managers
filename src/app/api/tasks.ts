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

let tasks: Task[] = [];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const newTask: Task = { taskId: Date.now().toString(), ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
  }
}
