import { Router } from "express";
import { auth } from "../middleware/auth.middelware.js";
import * as productsControllers from "../controllers/products.controller.js";

const router = Router();

router.get('/products',productsControllers.getAllProducts);
router.get('/products/:id', productsControllers.getProductById)
router.post('/products/', auth,productsControllers.createProduct)
router.delete('/products/:id', auth,productsControllers.deleteProduct)
router.put('/products/:id', auth,productsControllers.updarteProduct)

export default router;