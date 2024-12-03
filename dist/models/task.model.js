"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
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
const Task = mongoose_1.default.model('Task', taskSchema, "tasks");
exports.default = Task;
