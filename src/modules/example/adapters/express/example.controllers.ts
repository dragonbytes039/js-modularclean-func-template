import type { Request, Response , NextFunction } from "express";
import type { IexamepleService } from "../../app/example.types.js";


export function exampleControllerFactory(service:IexamepleService){

    async function create(req:Request, res:Response, next:NextFunction){
        
        try {
            
            const result = service.create({id:1, name:"test"})

            res.status(200).send("create")
            
        } catch (error) {
            res.status(500).send("errror")
        }
        
    }   

    return{
        create
    }
}
    
  

