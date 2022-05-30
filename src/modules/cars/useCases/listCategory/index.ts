import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoryUseCase);

export { listCategoriesController };