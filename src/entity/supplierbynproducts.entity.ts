import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema:"myExample",database:"ingreso_vehiculos",name:"ViewSuppliersByproducts"})
export class ViewSuppliersByproducts{

    @ViewColumn()    
    SupplierID : number
    
    @ViewColumn()    
    SupplierName : string
    
    @ViewColumn()    
    number_products: number
    

}
