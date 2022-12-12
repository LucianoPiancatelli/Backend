import express from 'express';
import {
	getCart,
	postCart,
	addProductsCart,
	deleteCart,
} from '../controllers/cart';

const router = express.Router();

router.get('/:id/products', getCart);
router.post('/', postCart);
router.post('/:id/products', addProductsCart);
router.delete('/:id', deleteCart);
router.delete('/:id/products/:id_prod');

export default router;
