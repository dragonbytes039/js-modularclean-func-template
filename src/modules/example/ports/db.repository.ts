import type { Example } from "../domain/entities.js"


export type exampleDbRepository = {

    create(example:Example):Example
    update(example:Example):Example
}