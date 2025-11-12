import type { Example } from "../domain/entities.js"

export type DbRepository = {

    create(example:Example):Example
    update(example:Example):Example
}