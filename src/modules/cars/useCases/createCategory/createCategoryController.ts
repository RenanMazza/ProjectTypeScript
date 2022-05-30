import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";



class CreateCategoryController {

    constructor(private createCategoryUsecase: CreateCategoryUseCase) {
    }

    handle(request: Request, response: Response) {

        const { name, description } = request.body;
        this.createCategoryUsecase.execute({ name, description });

        return response.status(201).send();
    }
}
export { CreateCategoryController };