import {IOrderDetails} from "../interfaces/orderdetails"

export interface IOrders{
    OrderID:number;
    CustomerID:number;
    EmployeeID:number;
    OrderDate:string;
    ShipperID:number;
    OrderDetails:IOrderDetails[];
}