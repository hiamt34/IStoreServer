"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.limiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = require("../utils/apiError");
exports.limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 60000,
    handler: function (_req, res) {
        return new apiError_1.ApiError(http_status_1.default.INTERNAL_SERVER_ERROR, 'Too many requests!', res);
    },
});
//# sourceMappingURL=rateLimiter.js.map