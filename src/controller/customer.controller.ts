import {Application} from "express";
import { CustomerService } from "../services/customer.service";

export class CustomerController {
    customer_service: CustomerService;

    constructor(private app: Application) {
        this.customer_service = new CustomerService();
        this.routes();
    }

    private routes(){
        this.app.route("/customers/fact_summary").get(this.customer_service.fillTable);


        this.app.route("/customer/:id/fact_summary").get(this.customer_service.getOneCustomer);

    }
}