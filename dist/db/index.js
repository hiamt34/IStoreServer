"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const connect = () => {
    const dbUri = process.env.DB_URI || 'mongodb+srv://hiamt34:havit123@istoreserver.php3q.mongodb.net/IStoreServer?retryWrites=true&w=majority';
    const options = {
        useNewUrlParser: true,
        autoIndex: true,
        useUnifiedTopology: true,
    };
    return mongoose_1.default
        .connect(dbUri, options)
        .then(() => {
        logger_1.default.info("Database connected");
    })
        .catch((error) => {
        logger_1.default.error("DB error", error);
        process.exit(1);
    });
};
exports.default = connect;
//# sourceMappingURL=index.js.map