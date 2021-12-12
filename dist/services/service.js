"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(model) {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return this.model.find({});
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getById = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return this.model.findOne(query);
            }
            catch (error) {
                throw new Error();
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                return this.model.create(data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.update = (query, update, option) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = this.model.findOne(query);
                if (!user) {
                    return user;
                }
                this.model.updateOne(query, update, option);
                Object.assign(user, update);
                return user;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.destroy = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return this.model.deleteOne(query);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.model = model;
    }
    ;
}
exports.BaseService = BaseService;
//# sourceMappingURL=service.js.map