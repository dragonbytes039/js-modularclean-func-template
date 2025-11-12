import type {Request, Response, nextFunction} from "express"
import { exampleMongoRepoFactory } from "./repositories/example.mongo.repo.js"
import { ExampleServiceFactory } from "./app/example.service.js"
import { exampleControllerFactory } from "./adapters/express/createExample.controllers.js"



const exampleMongoRepo = exampleMongoRepoFactory()
const exampleService = ExampleServiceFactory(exampleMongoRepo)

export const exampleControllerBuild = exampleControllerFactory(exampleService)