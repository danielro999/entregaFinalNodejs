import * as productModels from "../models/products.model.js";

//import {getAllProducts} from "../models/products.model.js";

export const getAllProducts = async ()=> await productModels.getAllProducts();

export const getProductById = async (id)=> await productModels.getProductById(id);

export const createProduct = async (product) => await productModels.createProductModel(product)

export const deleteProduct = async (id) => await productModels.deleteProduct(id)

export const updarteProduct = async (id, product) => await productModels.updarteProduct(id, product)