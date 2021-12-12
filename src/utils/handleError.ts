import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import log from "../logger";
import { ApiError } from "./apiError";

export const catchAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
        log.error(err.message)
        new ApiError(httpStatus['BAD_REQUEST'], err.message, res)
    });
};
