import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Suppliers"})
export class Supplier{
    
    @PrimaryColumn()
    SupplierID:number;
      
    @Column()    
    SupplierName:string;
    
    @Column()    
    ContactName:string;
    
    @Column()    
    Address:string;
    
    @Column()    
    City:string;
    
    @Column()    
    PostalCode:string;
    
    @Column()    
    Country:string;
    
    @Column()    
    Phone:string;
}