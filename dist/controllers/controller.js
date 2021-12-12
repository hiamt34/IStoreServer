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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = require("../utils/apiError");
class BaseController {
    constructor(service) {
        this.reads = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.service.getAll();
            return res.json({
                code: http_status_1.default.OK,
                status: true,
                data
            });
        });
        this.read = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                _id: req.params._id
            };
            const data = yield this.service.getById(query);
            if (!data)
                return new apiError_1.ApiError(http_status_1.default['NOT_FOUND'], "NOT_FOUND", res);
            return res.json({
                code: http_status_1.default.OK,
                status: true,
                data
            });
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const reqData = req.body;
            const data = yield this.service.create(reqData);
            return res.json({
                code: http_status_1.default.OK,
                status: true,
                data
            });
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                _id: req.params._id
            };
            const data = yield this.service.update(query, req.body, { upsert: true });
            if (!data) {
                return new apiError_1.ApiError(http_status_1.default['NOT_FOUND'], http_status_1.default['404_NAME'], res);
            }
            return res.json({
                code: http_status_1.default.OK,
                status: true,
                data
            });
        });
        this.destroy = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                _id: req.params._id
            };
            yield this.service.destroy(query);
            return res.json({
                code: http_status_1.default.OK,
                status: true,
            });
        });
        this.service = service;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=controller.js.map