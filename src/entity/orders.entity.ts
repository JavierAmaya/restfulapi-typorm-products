import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Orders"})
export class Orders{
    
    @PrimaryColumn()
    OrderID:number;
      
    @Column()    
    CustomerID:number;
    
    @Column()    
    EmployeeID:number;
    
    @Column()    
    OrderDate:string;
    
    @Column()    
    ShipperID:number;
    
}

