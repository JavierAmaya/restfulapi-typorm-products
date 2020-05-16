import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"myExample", database:"ingreso_vehiculos",name:"Employees"})
export class Employees{
    
    @PrimaryColumn()
    EmployeeID:number;
      
    @Column()    
    LastName:string;
    
    @Column()    
    FirstName:string;
    
    @Column()    
    BirthDate:string;
    
    @Column()    
    Photo:string;
    
    @Column()    
    Notes:string;
}

