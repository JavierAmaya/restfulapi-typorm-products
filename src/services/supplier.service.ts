import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Supplier} from "../entity/supplier.entity";

export class SupplierService {
    
    public async getAll(req:Request, res:Response){
        const supplier = await getConnection().getRepository(Supplier).find();
        res.status(200).json(supplier);
    }
    
}