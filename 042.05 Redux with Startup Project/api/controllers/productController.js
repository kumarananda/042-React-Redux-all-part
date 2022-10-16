import Product from "../models/Product.js"
import createError from "./createError.js";


// get all product

export const getAllProduct = async (req, res, next) => {
    
    const products = await Product.find();
    res.status(200).json(products)
}

// get all product
export const createProduct = async (req, res, next) => {
    console.log('createProduct called');
    
    let gallery = [];
    if(req.files.gallery){
        for( let i = 0; i < req.files.gallery.length; i++ ){
            gallery.push(req.files.gallery[i].filename);
        }
    }else{
        console.log('Gallary not entred');
    }

    let photo = 'deafult.png'
    if(req.files.photo){
        photo = req.files.photo[0].filename
    }

    try {

        const product = await Product.create({
            ...req.body,
            // photo : req.files.photo.filename,
            // photo : req.files.photo[0].filename,
            photo : photo,
            gallery : gallery,
            category : req.body.category.split(','),
            tags : req.body.tags.split(','),
            
        });
        // console.log(products);

        // if success full
        if(product){
            console.log('product created');
            res.status(201).json({
                message : "Product create successfull",
                product : product
            });
            
        }else{
            next(createError(401, 'Product created failed'))
    
        }
        
    } catch (error) {
        next(createError(error))
    }

    
}

// get singlae product
export const getSingalProduct = async (req, res, next) => {

    const {id } = req.params;
    console.log(id);

    try {
        const product = await Product.findById(id);
        res.status(200).json(product)

        
    } catch (error) {
        next(createError(error))
    }

    
}

// delete singlae product
export const deleteProduct = async (req, res, next) => {

    const {id } = req.params;


    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(401).json({
                message : "Product not found"
            })
        }
        if(product){
            res.status(200).json({
                message : "Product delete successful"
            })
        }

        
    } catch (error) {
        next(createError(error))
    }

    
}

// get singlae product
export const updateProduct = async (req, res, next) => {
    const {id } = req.params;


    try {
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(product){
            res.status(201).json({
                message : "Product Updated successful"
            })
        }
        
        
    } catch (error) {
        next(createError(error))
    }

    
}