import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Products"})
export class Products{
    
    @PrimaryColumn()
    ProductID:number;
      
    @Column()    
    ProductName:string;
    
    @Column()    
    SupplierID:number;
    
    @Column()    
    CategoryID:number;
    
    @Column()    
    Unit:string;
    
    @Column()    
    Price:number;
}
