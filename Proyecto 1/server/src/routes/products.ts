import express from 'express';
import {
	getProducts,
	getOneProduct,
	postProduct,
	deleteProduct,
	updateProduct,
} from '../controllers/products';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
