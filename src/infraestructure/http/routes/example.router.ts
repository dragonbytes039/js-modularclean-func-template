import { Router } from "express";
import exampleController from "../../../modules/example/index.js";



const ExampleRouter:Router = Router()

ExampleRouter.post("/create" ,exampleController.createExample) 

export default ExampleRouter
