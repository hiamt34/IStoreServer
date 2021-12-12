import { Response } from "express";
import log from "../logger";

export class ApiError extends Error {
    statusCode: any;
    res: Response;
    constructor(statusCode: any, message: string | undefined, res: Response) {
        super(message);
        
        log.error(message)
        res.status(statusCode).json({
            code: statusCode,
            status: false,
            message: message
        })
    }
}
