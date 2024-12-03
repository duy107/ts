import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    status: {
        type: String,
        default: "initial"
    },
    content: String,
    timeStart: {
        type: Date,
        default: Date.now()
    },
    timeFinish: {
        type: Date,
        default: Date.now()
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date,
    createdBy: String,
    listUsers: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});
const Task = mongoose.model('Task', taskSchema, "tasks");

export default Task;