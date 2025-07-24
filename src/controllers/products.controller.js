//import { getAllProducts } from '../models/products.model';
import * as productsServices from '../services/products.services.js';

export const getAllProducts = async (req, res)=>{
     res.json(await productsServices.getAllProducts())
};

export const getProductById = async (req, res)=> {
    const productId = req.params.id;
    //const {id} = req.params;
    res.json(await productsServices.getProductById(productId))
}

export const createProduct = async (req, res)=>{
    const {articulo, categoria, cantidad, precio} = req.body;
    const newProduct = await productsServices.createProduct({articulo, categoria, cantidad, precio})
    res.status(201).json(newProduct)
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    res.json(await productsServices.deleteProduct(id));
}

export const updarteProduct = async (req, res) =>{
    const {id} = req.params;
    const {articulo, categoria, cantidad, precio} = req.body;
    res.json( await productsServices.updarteProduct(id, {articulo, categoria, cantidad, precio}))
}