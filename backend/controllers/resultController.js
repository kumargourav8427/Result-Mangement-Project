// controllers/resultController.js
import Result from '../models/Result.js';

// Add a new result
export const addResult = async (req, res) => {
    const { studentId, subject, marks } = req.body;
    try {
        const result = new Result({ studentId, subject, marks });
        await result.save();
        res.json({ msg: 'Result added successfully' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get results by student ID
export const getResultsByStudentId = async (req, res) => {
    try {
        const results = await Result.find({ studentId: req.params.studentId });
        res.json(results);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
