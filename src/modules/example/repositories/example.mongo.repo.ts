import type { Example } from "../domain/entities.js"
import type { DbRepository } from "./db.interfaces.js"

export function exampleMongoRepoFactory():DbRepository{
    function create (example:Example){
        return example
    }
    function update (example:Example){
        return example
    }

    return {
        create,
        update
    }
}