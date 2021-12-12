"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true },
    status: { type: String, enum: ['New', "Hot", "Nomal"], default: "New" },
    sale: { type: Number, default: 0, max: 100, min: 0 },
    price: { type: Number, required: true },
    shortDescription: { type: String, trim: true, maxlength: 100 },
    img: { type: String, required: true },
    category: { type: String, required: true, trim: true }
}, {
    timestamps: true
});
exports.Product = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=products.model.js.map