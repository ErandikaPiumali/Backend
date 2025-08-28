import express from "express";
import { createProduct, deleteProduct, getProductInfo, getProducts, updateProduct,} from './controllers/productController.js';

//create a new router
const productRouter = express.Router();

productRouter.post("/",createProduct);
productRouter.get("/",getProducts);
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct);
productRouter.get("/:productId",getProductInfo);



/*productRouter.get("/:productId",(req,res)=>{
    res.json({
        message : "Product details  for " + req.params.productId
    })
})

productRouter.delete("/:productId",(req,res)=>{
    console.log(req.params.productId)
    console.log("Delete request triggered")
    
})

productRouter.get("/featured",(req,res)=>{
    console.log("Featured product request triggerd")
    res.json({
        message : "Featured products"
    })
})*/



export default productRouter;