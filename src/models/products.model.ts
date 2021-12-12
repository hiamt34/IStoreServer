import mongoose from 'mongoose';
import { ProductDocument } from '../interfaces/products.interface';

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        status: { type: String, enum: ['New', "Hot", "Nomal"], default: "New" },
        sale: { type: Number, default: 0, max: 100, min: 0 },
        price: { type: Number, required: true },
        shortDescription: { type: String, trim: true, maxlength: 100},
        img: { type: String, required: true},
        category: { type: String, required: true, trim: true}
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model<ProductDocument>('Product', ProductSchema);
