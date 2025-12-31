import type { Example } from "../domain/entities.js";
import type { exampleDbRepository } from "../ports/db.repository.js";
import type { createExampleService } from "../ports/example.services.js";


export function createExampleServiceFactory(dbRepo:exampleDbRepository):createExampleService{

    return async function (example:Example):Promise<Example>{

        return await dbRepo.create(example)
    }
    
}