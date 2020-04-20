import {Application} from "express";
import { SupplierService } from "../services/supplier.service";

export class SupplierController {
    supplier_service: SupplierService;

    constructor(private app: Application) {
        this.supplier_service = new SupplierService();
        this.routes();
    }

    private routes(){
        this.app.route("/suppliers").get(this.supplier_service.getAll);
    }
}