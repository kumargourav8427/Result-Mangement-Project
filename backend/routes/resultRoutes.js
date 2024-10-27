// routes/resultRoutes.js
import express from 'express';
import { addResult, getResultsByStudentId } from '../controllers/resultController.js';

const router = express.Router();

// Add a new result
router.post('/', addResult);

// Get results by student ID
router.get('/:studentId', getResultsByStudentId);

export default router;
