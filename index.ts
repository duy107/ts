import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import mainRouteV1 from "./routes/index.route";
// use env
dotenv.config();
// connect database
database.connect();
// use Express
const app: Express = express();

const port: number | string = process.env.PORT || 3000;

mainRouteV1(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
console.log("dddddddd");