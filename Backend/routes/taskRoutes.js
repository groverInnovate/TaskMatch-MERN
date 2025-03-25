import express from 'express';
import { getTasks, createTask, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.get('/:id', authMiddleware, getTaskById);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;
