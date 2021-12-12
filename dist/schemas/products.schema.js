"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyAndGetDeatailProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const yup_1 = require("yup");
const payload = {
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required('name is require!'),
        status: (0, yup_1.string)(),
        sale: (0, yup_1.number)().max(100).min(0),
        price: (0, yup_1.number)().required('price is require!'),
        img: (0, yup_1.string)().required('images is require!'),
        shortDescription: (0, yup_1.string)().max(100),
        category: (0, yup_1.string)()
    })
};
exports.createProductSchema = (0, yup_1.object)(Object.assign({}, payload));
exports.updateProductSchema = (0, yup_1.object)(Object.assign({ params: (0, yup_1.object)({
        _id: (0, yup_1.string)()
            .required('_id is require!')
    }) }, payload));
exports.destroyAndGetDeatailProductSchema = (0, yup_1.object)({
    params: (0, yup_1.object)({
        _id: (0, yup_1.string)()
            .required('_id is require!')
    })
});
//# sourceMappingURL=products.schema.js.map