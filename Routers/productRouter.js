import express from "express";
import { createProduct } from './controllers/productController.js';

//create a new router
const productRouter = express.Router();

productRouter.post("/",createProduct);
console.log("Product router loaded");


export default productRouter;