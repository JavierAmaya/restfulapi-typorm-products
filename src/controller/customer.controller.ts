import {Application} from "express";
import { CustomerService } from "../services/customer.service";
import { Fact_Summary } from "../entity/fact_summary";

export class CustomerController {
    customer_service: CustomerService;

    constructor(private app: Application) {
        this.customer_service = new CustomerService();
        this.routes();
    }

    private routes(){
        this.app.route("/fact_summary").get(this.customer_service.getAll);

        this.app.route("/fact_summary")
        .post(this.customer_service.createOne);

        this.app.route("/fact_summary/:id").put(this.customer_service.updateOne);

        
       
    }
}