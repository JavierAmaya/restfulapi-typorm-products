import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Orders} from "../entity/orders.entity";
import {IOrders} from "../interfaces/order";
import {IResult} from "../interfaces/result";

export class OrderService {
    
    public async getAllOrders(req:Request, res:Response){
        const orders = await getConnection().getRepository(Orders).find();
        res.status(200).json(orders);
    }

    public async getOneOrder(req:Request, res:Response){
        const order:Orders[] = await getConnection().getRepository(Orders).find({where:{OrderID:req.params.id}});
        res.status(200).json(order[0]);
    }

    /*public async getOneSummary(req:Request, res:Response){
        const supplier:ViewSuppliersByproducts[] = await getConnection().getRepository(ViewSuppliersByproducts ).find({where:{SupplierID:req.params.id}});
        res.status(200).json(supplier[0]);
    }*/

    public async updateOne(req:Request, res:Response){
        try {
            await getConnection().createQueryBuilder().update(Orders)
            .set({
                OrderID:req.body.OrderID,
                CustomerID:req.body.CustomerID,
                EmployeeID:req.body.EmployeeID,
                OrderDate:req.body.OrderDate,
                ShipperID:req.body.ShipperID
            })
            .where("OrderID = :id",{id: req.params.id}).execute();

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

    public async createOneOrder(req: Request , res:Response){
        const o : IOrders = req.body;
        const result: IResult[] = await getConnection().query(`EXEC myExample.SP_CREATE_ORDER 
            @OrderID = ${o.OrderID},
            @CustomerID = '${o.CustomerID}',
            @EmployeeID = '${o.EmployeeID}',
            @OrderDate = '${o.OrderDate}',
            @ShipperID = '${o.ShipperID}'
        `);

        res.status(201).json(result[0]) 

        if (result[0].Successed===1) {
            console.log("entro al if");
            for (const detalle in o.OrderDetails) {
                let r : IResult[] = await getConnection().query(`
                    EXEC myExample.SP_CREATE_ORDER_DETAIL
                    @OrderDetailID = ${o.OrderDetails[detalle].OrderDetailID},
                    @OrderID = ${o.OrderDetails[detalle].OrderID},
                    @ProductID = ${o.OrderDetails[detalle].ProductID}
                    @Quantity = ${o.OrderDetails[detalle].Quantity}
                `);
                console.log("registro numero : "+detalle+" insertado")
            }
        }
    }

    /*public async deleteOne(req: Request , res:Response){
        const result: IResult[] = await getConnection().query(`EXEC myExample.SP_DELETE_SUPPLIER 
        @SupplierID = ${req.params.id} `);
        res.status(201).json(result[0]); 
    }*/
    
}