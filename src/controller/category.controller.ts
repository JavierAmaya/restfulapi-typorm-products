import {Application} from "express";
import { CategoriesService } from "../services/categories.service";

export class CategoryController {
    category_service: CategoriesService;

    constructor(private app: Application) {
        this.category_service = new CategoriesService();
        this.routes();
    }

    private routes(){
        this.app.route("/categories").get(this.category_service.getAllCategories);

        this.app.route("/category/:id")
        .get(this.category_service.getOneCategorie);
        //.put(this.supplier_service.updateOne)
        //.delete(this.supplier_service.deleteOne);
       
       /* this.app.route("/supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);

        this.app.route("/supplier")
        .post(this.supplier_service.createOne);*/

        
       
    }
}