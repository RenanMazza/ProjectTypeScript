import { Router } from "express";
import { createSpecificationController } from "../src/modules/cars/useCases/createSpecification";



const SpecificationRoutes = Router();

SpecificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
})


export { SpecificationRoutes }