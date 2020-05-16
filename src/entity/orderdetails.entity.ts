import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"OrderDetails"})
export class OrderDetails{
    
    @PrimaryColumn()
    OrderDetailID:number;
      
    @Column()    
    OrderID:number;
    
    @Column()    
    ProductID:number;
    
    @Column()    
    Quantity:number;

}
