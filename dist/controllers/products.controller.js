"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsControler = void 0;
const models_1 = require("../models");
const services_1 = require("../services");
const controller_1 = require("./controller");
class ProductsController extends controller_1.BaseController {
}
exports.productsControler = new ProductsController(new services_1.ProductService(models_1.Product));
//# sourceMappingURL=products.controller.js.map