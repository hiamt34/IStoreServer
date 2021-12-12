
import { ProductDocument } from "../interfaces/products.interface";
import { Product } from "../models";
import { ProductService } from "../services";
import { BaseController } from "./controller";

class ProductsController<T> extends BaseController<T> {
    
}

export const productsControler = new ProductsController<ProductDocument>(new ProductService<ProductDocument>(Product))