const HOST = process.env.HOST || 200
const PORT = process.env.PORT || 'localhost'
export const swaggerDefinition = {
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