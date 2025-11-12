import type { Example } from "../domain/entities.js";
import type { DbRepository } from "../repositories/db.interfaces.js";
import type { IexamepleService } from "./example.types.js";


export function ExampleServiceFactory(dbRepo:DbRepository):IexamepleService{
    function create (example:Example):Example{
        
        return dbRepo.create(example)
    }

    return {
        create,
    }
}