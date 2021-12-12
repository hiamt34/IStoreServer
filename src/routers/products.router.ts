import { Express, Router } from "express";
import { createProductSchema, destroyAndGetDeatailProductSchema, updateProductSchema } from "../schemas";
import { catchAsync } from "../utils/handleError";
import { productsControler } from "../controllers";
import { validate } from "../middleware/validate";

const router = Router()

const productsRouter = (app: Express) => {
    app.use('/products', router)

    router.get('/', catchAsync(productsControler.reads))

    router.get('/:_id', validate(destroyAndGetDeatailProductSchema), catchAsync(productsControler.read))

    router.post('/', validate(createProductSchema), catchAsync(productsControler.create))

    router.put('/:_id', validate(updateProductSchema), catchAsync(productsControler.update))

    router.delete('/:_id', validate(destroyAndGetDeatailProductSchema), catchAsync(productsControler.destroy))

}

export default productsRouter
