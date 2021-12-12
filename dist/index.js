"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const logger_1 = __importDefault(require("./logger"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const rateLimiter_1 = require("./middleware/rateLimiter");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = Number(process.env.PORT) || 2000;
const HOST = process.env.HOST || 'localhost';
const IS_PRODUCTION = process.env.IS_PRODUCTION || false;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:2000', '*'];
const options = {
    origin: allowedOrigins
};
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
if (IS_PRODUCTION) {
    app.use('/', rateLimiter_1.limiter);
}
app.listen(PORT, HOST, () => {
    logger_1.default.info(`Server listing at http://${HOST}:${PORT}`);
    (0, db_1.default)();
    (0, routers_1.default)(app);
});
//# sourceMappingURL=index.js.map