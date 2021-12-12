import mongoose from 'mongoose'

export interface ProductDocument extends mongoose.Document {
    name: string;
    status: string;
    sale: number;
    price: number;
    shortDescription: string;
    img: string
};