import { Router } from "express";
import { exampleControllerBuild } from "../../../modules/example/index.js";



const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,exampleControllerBuild.create )

export default ExampleRouter
