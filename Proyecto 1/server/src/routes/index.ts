import express from 'express';
import products from './products';
import cart from './cart';

const router = express.Router();

router.use('/api/products', products);
router.use('/api/cart', cart);

export { router };
