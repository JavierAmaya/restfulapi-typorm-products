import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Categories} from "../entity/categories.entity";
import {ICategories} from "../interfaces/categories";
import {IResult} from "../interfaces/result";

export class CategoriesService{
   
    public async getAllCategories(req:Request, res:Response){
        const categories = await getConnection().getRepository(Categories).find();
        res.status(200).json(categories);
    }

    public async getOneCategorie(req:Request, res:Response){
        const category:Categories[] = await getConnection().getRepository(Categories).find({where:{CategoryID:req.params.id}});
        res.status(200).json(category[0]);
    }

}