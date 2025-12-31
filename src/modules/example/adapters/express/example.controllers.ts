import type { Request, Response , NextFunction } from "express";
import type {createExampleService } from "../../ports/example.services.js";


export function createExampleControllerFactory(service:createExampleService){

    return async function(req:Request, res:Response, next:NextFunction){
        
        try {
            
            const result = await service({id:1, name:"test"})

            res.status(200).send("create")
            
        } catch (error) {
            res.status(500).send("errror")
        }
        
    }   

}
    
  

