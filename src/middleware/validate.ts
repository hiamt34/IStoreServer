import { AnySchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';
import httpStatus from 'http-status';

export const validate = ( schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params : req.params
        });
        return next()
    } catch (error: any) {
        return new ApiError(httpStatus['BAD_REQUEST'], error.message, res)
    }
};
