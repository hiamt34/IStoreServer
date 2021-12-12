"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const logger_1 = __importDefault(require("../logger"));
class ApiError extends Error {
    constructor(statusCode, message, res) {
        super(message);
        logger_1.default.error(message);
        res.status(statusCode).json({
            code: statusCode,
            status: false,
            message: message
        });
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=apiError.js.map