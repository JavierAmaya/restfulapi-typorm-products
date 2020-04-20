import {Request, Response} from "express";

export class MainService{
    public HelloWorld(req:Request, res:Response){
        res.status(200).json({
            "message":`${process.env.MESSAGE}`
        });
    }

}