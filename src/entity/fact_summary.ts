import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"mySchema", database:"ingreso_vehiculos",name:"fact_summary"})
export class Fact_Summary{
    @Column()    
    CustomerID : Number
    @Column()    
    CustomerName : string
    @Column()    
    SupplierID : Number
    @Column()    
    SupplierName : string
    @Column()    
    Mes : Number
    @Column()    
    Anio : Number
    @Column()    
    Total : Number
    @Column()    
    SuperoPromedio : Number
    @Column()    
    PorcentajeVentaMensual : Number
}
