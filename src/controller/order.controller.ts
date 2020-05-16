import {Application} from "express";
import { OrderService} from "../services/order.service";

export class OrderController {
    order_service: OrderService;

    constructor(private app: Application) {
        this.order_service = new OrderService();
        this.routes();
    }

    private routes(){
        this.app.route("/orders").get(this.order_service.getAllOrders);

        this.app.route("/order")
        .post(this.order_service.createOneOrder);

        this.app.route("/order/:id")
        .get(this.order_service.getOneOrder)
        .put(this.order_service.updateOne)
        /*.delete(this.supplier_service.deleteOne);*/

        /*this.app.route("/supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);*/
       
    }
}