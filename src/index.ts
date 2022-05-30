import { Router } from "express";

import { categoriesRoutes } from "../routes/categories.routes";
import { SpecificationRoutes } from "../routes/Specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/Specifications", SpecificationRoutes);

export { router };

