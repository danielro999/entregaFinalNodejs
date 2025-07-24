import { Router } from "express";

import * as productsControllers from "../controllers/products.controller.js";

const router = Router();

router.get('/products',productsControllers.getAllProducts);
router.get('/products/:id', productsControllers.getProductById)
router.post('/products/', productsControllers.createProduct)
router.delete('/products/:id', productsControllers.deleteProduct)
router.put('/products/:id', productsControllers.updarteProduct)

export default router;