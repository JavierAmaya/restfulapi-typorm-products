import {Application} from "express";
import {MainService} from "../services/main.service";

export class MainController{
    main_service: MainService;

    constructor(private app:Application){
        this.main_service=new MainService();
        this.routes();
    }

    private routes(){
        this.app.route("/").get(this.main_service.HelloWorld);
    }

}