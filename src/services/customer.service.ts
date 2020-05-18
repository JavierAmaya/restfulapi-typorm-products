import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {IFact_Summary} from "../interfaces/fact_summary";
import {IResult} from "../interfaces/result"

export class CustomerService{
    
    public async fillTable(req: Request , res:Response){
        const result:IResult[] = await getConnection().query(`EXEC mySchema.SP_CREATE_FACT_SUMMARY`);
        res.status(201).json(result) 
    }

    public async getOneCustomer(req: Request , res:Response){
        const result:IFact_Summary[] = await getConnection().query(`SELECT *FROM mySchema.fact_summary WHERE CustomerID = ${req.params.id}`);
        res.status(201).json(result) 
    }


}