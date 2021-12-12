const URL = 'http://localhost:2000/' || `https://istoreserver.herokuapp.com/`
export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'istore',
        version: '1.0.0',
    },
    servers: [
        {
            url: URL,
        },
    ],
};