import rateLimit from 'express-rate-limit'
import httpStatus from 'http-status';
import { ApiError } from '../utils/apiError';
export const limiter = rateLimit({
    windowMs: 60 * 1000, //1s
    max: 60000,
    handler: function (_req, res) {
        return new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Too many requests!', res)
    },
});