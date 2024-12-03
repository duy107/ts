"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_route_1 = __importDefault(require("./task.route"));
const mainRouteV1 = (app) => {
    app.use("/task", task_route_1.default);
};
exports.default = mainRouteV1;
