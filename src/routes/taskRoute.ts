import { Router } from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById
} from '../controllers/taskController';

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

export default router;
