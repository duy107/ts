import { Request, Response } from "express";
import Task from "../models/task.model";
import paginationHelper from "../helpers/pagination";

export const listTask = async (req: Request, res: Response) => {
    interface Find {
        deleted: false,
        status?: string
    }
    const find: Find = {
        deleted: false
    }

    if (req.query.status) {
        find.status = (req.query.status).toString();
    }

    const sort = {};
    if (req.query.sortKey && req.query.sortValue) {
        sort[req.query.sortKey.toString()] = req.query.sortValue;
    }
    const numberTasks = await Task.countDocuments({deleted: false});
    const objectPagination = paginationHelper(
        {
            currentPage: 1,
            limitItems: 2
        },
        numberTasks,
        req.query
    );
    const data = await Task.find(find)
        .sort(sort)
        .skip(objectPagination.skip)
        .limit(objectPagination.limitItems);
    res.json(data);
}