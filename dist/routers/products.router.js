"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemas_1 = require("../schemas");
const handleError_1 = require("../utils/handleError");
const controllers_1 = require("../controllers");
const validate_1 = require("../middleware/validate");
const router = (0, express_1.Router)();
const productsRouter = (app) => {
    app.use('/products', router);
    router.get('/', (0, handleError_1.catchAsync)(controllers_1.productsControler.reads));
    router.get('/:_id', (0, validate_1.validate)(schemas_1.destroyAndGetDeatailProductSchema), (0, handleError_1.catchAsync)(controllers_1.productsControler.read));
    router.post('/', (0, validate_1.validate)(schemas_1.createProductSchema), (0, handleError_1.catchAsync)(controllers_1.productsControler.create));
    router.put('/:_id', (0, validate_1.validate)(schemas_1.updateProductSchema), (0, handleError_1.catchAsync)(controllers_1.productsControler.update));
    router.delete('/:_id', (0, validate_1.validate)(schemas_1.destroyAndGetDeatailProductSchema), (0, handleError_1.catchAsync)(controllers_1.productsControler.destroy));
};
exports.default = productsRouter;
//# sourceMappingURL=products.router.js.map