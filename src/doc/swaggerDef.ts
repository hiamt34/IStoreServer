export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'istore',
        version: '1.0.0',
    },
    servers: [
        {
            url: process.env.URL || `https://istoreserver.herokuapp.com/`,
        },
    ],
};