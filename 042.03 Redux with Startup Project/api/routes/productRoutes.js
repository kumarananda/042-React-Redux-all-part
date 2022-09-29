import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getSingalProduct } from '../controllers/productController.js';


//init router
const router = express.Router();

// product routes
router.get('/', getAllProduct)
router.post('/', createProduct)
router.route('/:id').get(getSingalProduct).delete(deleteProduct)



// export router
export default router;
