import type { Example } from "../domain/entities.js";


export type IexamepleService = { 
    create(example:Example):Example
}