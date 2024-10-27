// models/Result.js
import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

const Result = mongoose.model('Result', ResultSchema);
export default Result;
