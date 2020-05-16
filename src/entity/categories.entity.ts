import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Categories"})
export class Categories{
    
    @PrimaryColumn()
    CategoryID:number;
      
    @Column()    
    CategoryName:string;
    
    @Column()    
    Description:string;
}

