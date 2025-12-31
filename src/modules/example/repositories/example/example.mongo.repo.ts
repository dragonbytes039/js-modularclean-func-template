import type { Example } from "../../domain/entities.js"
import type { exampleDbRepository } from "../../ports/db.repository.js"

export function exampleMongoRepoFactory():exampleDbRepository {
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