import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import mongoose from "mongoose"
interface IBaseService {
    getAll(): void
    getById(query: any): void
    create(data: any): void
    update(query: any, update: any, destroy: any): void
    destroy(query: any): void
}

export class BaseService<T> implements IBaseService {

    public model: mongoose.Model<T>
    constructor(model: mongoose.Model<T>) {
        this.model = model;
    };

    public getAll = async (): Promise<T[]> => {
        try {
            return this.model.find({});
        } catch (error: any) {
            throw new Error(error);
        }
    };

    public getById = async (query: FilterQuery<T>): Promise<T | null> => {
        try {
            return this.model.findOne(query);
        } catch (error: any) {            
            throw new Error();
        }
    };

    public create = async (data: DocumentDefinition<T>): Promise<T> => {
        try {
            return this.model.create(data);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    public update = async (query: FilterQuery<T>, update: UpdateQuery<T> , option?: QueryOptions) => {
        try {
            const user = this.model.findOne(query)
            if (!user) {
                return user
            }
            
            this.model.updateOne(query, update, option);
            Object.assign(user, update)
            return user
        } catch (error: any) {
            throw new Error(error);
        }
    };

    public destroy = async (query: FilterQuery<T>) => {
        try {
            return this.model.deleteOne(query);
        } catch (error: any) {
            throw new Error(error);
        }
    };
    
}