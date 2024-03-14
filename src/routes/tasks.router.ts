import express from 'express';
import { createTask, taskList, getTaskById, updateTask, deleteTask } from '../controllers/tasks.controller.js';
const router = express.Router();

router.post('/', createTask);
router.get('/', taskList);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
