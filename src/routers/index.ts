import { Express } from 'express'
import { docRouter } from './doc.router'
import productsRouter from './products.router'

const routers = (app: Express) => {
    productsRouter(app)
    docRouter(app)
}

export default routers
