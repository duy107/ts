import { Express } from "express";
import taskRoute from "./task.route";
const mainRouteV1 = (app: Express) => {
    app.use("/task" ,taskRoute);
}
export default mainRouteV1;