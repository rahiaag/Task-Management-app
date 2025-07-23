import { Request, Response } from 'express';
import { tasks } from '../data/taskStore';
import { Task } from '../models/taskModel';
import { v4 as uuidv4 } from 'uuid';

export const createTask = (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  if (!title || !description || !status) {
    return res.status(400).json({ message: 'Please fill all fields.' });
  }

  const newTask: Task = {
    id: uuidv4(),
    title,
    description,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const getAllTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find(t => t.id === req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

export const updateTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const existingTask = tasks[index];

  tasks[index] = {
    ...existingTask,
    title: title || existingTask.title,
    description: description || existingTask.description,
    status: status || existingTask.status,
    updatedAt: new Date().toISOString(),
  };

  res.json(tasks[index]);
};

export const deleteTaskById = (req: Request, res: Response) => {
  const index = tasks.findIndex(t => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const removed = tasks.splice(index, 1);
  res.json({ message: 'Task deleted', task: removed[0] });
};
