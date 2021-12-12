import { Express } from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { swaggerDefinition } from "../doc/swaggerDef"

export const docRouter = (app: Express) => {
    const specs = swaggerJsdoc({
        swaggerDefinition,
        apis: ['./**/*.yaml', './**/*.ts'],
    });
    app.use('/doc-api', swaggerUi.serve, swaggerUi.setup(specs, {
        explorer: false,
    }));
}
  