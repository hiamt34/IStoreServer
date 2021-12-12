"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDefinition = void 0;
const HOST = process.env.HOST || 200;
const PORT = process.env.PORT || '0.0.0.0';
exports.swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'istore',
        version: '1.0.0',
    },
    servers: [
        {
            url: process.env.URL || `http://${HOST}:${PORT}/`,
        },
    ],
};
//# sourceMappingURL=swaggerDef.js.map