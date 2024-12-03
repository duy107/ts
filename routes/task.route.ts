import { Router } from "express";
import * as controller from "../controllers/task.controller";
const route: Router = Router();
route.get("/", controller.listTask);
const taskRoute: Router = route;
export default taskRoute;