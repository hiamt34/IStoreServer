import { Request, Response } from "express";
import httpStatus from "http-status";
import { DocumentDefinition, FilterQuery } from "mongoose";
import { BaseService } from "../services/service";
import { ApiError } from "../utils/apiError";

export class BaseController<T> {

    public service: BaseService<T>

    constructor(service: BaseService<T>) {
        this.service = service
    }

    public reads = async (_req: Request, res: Response) => {
        const data = await this.service.getAll();

        return res.json({
            code: httpStatus.OK,
            status: true,
            data
        });
    }

    public read = async (req: Request, res: Response) => {
        const query = {
            _id: req.params._id as string
        } as FilterQuery<T>;

        const data = await this.service.getById(query);
        
        if (!data) return new ApiError(httpStatus['NOT_FOUND'], "NOT_FOUND", res)

        return res.json({
            code: httpStatus.OK,
            status: true,
            data
        });
    }

    public create = async (req: Request, res: Response) => {
        const reqData: DocumentDefinition<T> = req.body;

        const data = await this.service.create(reqData);

        return res.json({
            code: httpStatus.OK,
            status: true,
            data
        });
    }

    public update = async (req: Request, res: Response) => {
        const query = {
            _id: req.params._id as string
        } as unknown as FilterQuery<T>;

        const data = await this.service.update(query, req.body, {upsert: true});

        if (!data) {            
            return new ApiError(httpStatus['NOT_FOUND'], httpStatus['404_NAME'], res)
        }

        return res.json({
            code: httpStatus.OK,
            status: true,
            data
        });
    }

    public destroy = async (req: Request, res: Response) => {
        const query = {
            _id: req.params._id as string
        } as unknown as FilterQuery<T>;

        await this.service.destroy(query);

        return res.json({
            code: httpStatus.OK,
            status: true,
        });
    }

}