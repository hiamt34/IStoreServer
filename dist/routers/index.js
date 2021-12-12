"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doc_router_1 = require("./doc.router");
const products_router_1 = __importDefault(require("./products.router"));
const routers = (app) => {
    (0, products_router_1.default)(app);
    (0, doc_router_1.docRouter)(app);
};
exports.default = routers;
//# sourceMappingURL=index.js.map