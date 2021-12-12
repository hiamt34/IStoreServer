"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docRouter = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDef_1 = require("../doc/swaggerDef");
const docRouter = (app) => {
    const specs = (0, swagger_jsdoc_1.default)({
        swaggerDefinition: swaggerDef_1.swaggerDefinition,
        apis: ['./**/*.yaml', './**/*.ts'],
    });
    app.use('/doc-api', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, {
        explorer: false,
    }));
};
exports.docRouter = docRouter;
//# sourceMappingURL=doc.router.js.map