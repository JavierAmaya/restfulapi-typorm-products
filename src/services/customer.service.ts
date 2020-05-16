import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Fact_Summary} from "../entity/fact_summary";
import {IFact_Summary} from "../interfaces/fact_summary";
import {IResult} from "../interfaces/result";

export class CustomerService{
   
    public async getAll(req:Request, res:Response){
        const fact_summary = await getConnection().getRepository(Fact_Summary).find();
        res.status(200).json(fact_summary);
    }
    
    public async createOne(req: Request , res:Response){
        const o : IFact_Summary = req.body;
        const result: IResult[] = await getConnection().query(`EXEC mySchema.SP_CREATE_FACT_SUMMARY 
            @CustomerID = ${o.CustomerID},
            @CustomerName = '${o.CustomerName}',
            @SupplierID = '${o.SupplierID}',
            @SupplierName = '${o.SupplierName}',
            @Mes = '${o.Mes}'
            @Anio = '${o.Anio}'
            @Total = '${o.Total}'
            @SuperoPromedio = '${o.SuperoPromedio}'
            @PorcentajeVentaMensual = '${o.PorcentajeVentaMensual}'
        `);
        res.status(201).json(result[0]) 
    }

    public async updateOne(req:Request, res:Response){
        try {
            await getConnection().createQueryBuilder().update(Fact_Summary)
            .set({
                CustomerName:req.body.CustomerName,
                SupplierID:req.body.SupplierID,
                SupplierName:req.body.SupplierName,
                Mes:req.body.Mes,
                Anio:req.body.Anio,
                Total:req.body.Total,
                SuperoPromedio:req.body.SuperoPromedio,
                PorcentajeVentaMensual:req.body.PorcentajeVentaMensual
            })
            .where("CustomerID = :id",{id: req.params.id}).execute();

            res.status(200).json({
                update:true
            });
            
        } catch (Error) {
            res.status(401).json({
                update:false,
                Message: Error.Message
            }); 
        }
    }


}