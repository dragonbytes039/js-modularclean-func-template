import type {Request, Response, nextFunction} from "express"
import { exampleMongoRepoFactory } from "./repositories/example/example.mongo.repo.js"
import { createExampleServiceFactory } from "./app/createExample.js"
import { createExampleControllerFactory } from "./adapters/express/example.controllers.js"



const exampleMongoRepo = exampleMongoRepoFactory()

const exampleService = createExampleServiceFactory(exampleMongoRepo)
const createExample = createExampleControllerFactory(exampleService)

export default {
    createExample,
}