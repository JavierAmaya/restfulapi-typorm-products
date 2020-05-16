import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Shippers"})
export class Shippers{
    
    @PrimaryColumn()
    ShipperID:number;
      
    @Column()    
    ShipperName:string;
    
    @Column()    
    Phone:string;

}
