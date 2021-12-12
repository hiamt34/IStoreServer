import rateLimit from 'express-rate-limit'
export const limiter = rateLimit({
    windowMs: 60 * 1000, //1s
    max: 60000,
    skipSuccessfulRequests: true,
});