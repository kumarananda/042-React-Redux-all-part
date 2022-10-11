import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getSingalProduct, updateProduct } from '../controllers/productController.js';
import multer from 'multer';
import path, { resolve } from 'path';


//init router
const router = express.Router();
const __dirname = resolve()

// product photo upload
// file name controle & destination
const storage = multer.diskStorage({
    
    filename : (req, file, cb) => {
        // console.log(file);
        console.log(req.body);
        if(file.fieldname == 'gallery'){
            let extName =path.extname(file.originalname)
            // console.log(extName);
            // let fileName = Date.now() +'_' + Math.ceil(Math.random() * 100000)  + '.' + extName;
            let fileName = Date.now() +'_' + Math.ceil(Math.random() * 100000) + extName;
            // console.log(fileName);
            cb(null , fileName)
        }else if(file.fieldname == 'photo'){
            let extName =path.extname(file.originalname)
            // console.log(extName);
            // let fileName = Date.now() +'_' + Math.ceil(Math.random() * 100000)  + '.' + extName;
            let fileName = Date.now() +'_' + Math.ceil(Math.random() * 100000) + extName;
            // console.log(fileName);
            cb(null , fileName)
        }else if (file.fieldname == 'cv') {
            let date = new Date();
            let fileName = date.getFullYear() + '_' + date.getMonth()+'_'+ date.getDate() + '_' + file.originalname;


            cb(null , fileName)
        }

    },
    destination : (req, file, cb) => {
        
        // cb(null, 'media/users')

        if(file.fieldname == 'cv'){
            cb(null, 'media/users/cv')
        }else if (file.fieldname == 'photo'){
            cb(null, path.join(__dirname, 'api/public/images/product/'))
        }else if(file.fieldname == 'gallery'){
            cb(null, path.join(__dirname, 'api/public/images/product/'))
        }
        
    }
});

// // for single photo
// const ProductMulter = multer({
//     storage
// }).single('photo')

// for multiple photo or file
const ProductMulter = multer({
    storage : storage
}).fields([
    {
        name: 'photo',
        maxCount: 1
    },
    {
        name: 'gallery',
        maxCount: 10
    }
])


// product routes
router.get('/', getAllProduct)
router.post('/', ProductMulter, createProduct)
router.route('/:id').get(getSingalProduct).delete(deleteProduct).put(updateProduct)



// export router
export default router;
