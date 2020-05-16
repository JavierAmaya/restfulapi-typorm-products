import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Customers"})
export class Customers{
    
    @PrimaryColumn()
    CustomerID:number;
      
    @Column()    
    CustomerName:string;
    
    @Column()    
    ContactName:string;
    
    @Column()    
    Address:string;
    
    @Column()    
    City:string;
    
    @Column()    
    PostalCode:number;
    
    @Column()    
    Country:string;
}
