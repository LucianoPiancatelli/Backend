import { Request, Response } from 'express';
import fs from 'fs';
import { Product } from '../../interfaces';

export default function addProductsCart(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const { newProducts } = req.body;
		const parseCart = JSON.parse(
			fs.readFileSync(`src/utils/mockups/carts/${id}.JSON`, 'utf-8'),
		);
		const listProducts = JSON.parse(
			fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
		);
		newProducts.forEach((addProduct: any) => {
			const searchProducts = listProducts.find((product: Product) => {
				return product.id === addProduct.id;
			});
			parseCart.products.push(searchProducts);
		});
		fs.writeFileSync(
			`src/utils/mockups/carts/${id}.JSON`,
			JSON.stringify(parseCart, null, 2),
		);
		res.status(200).json({ parseCart, newProducts });
	} catch (error) {
		console.log(error);
		res.status(404).json({
			ok: false,
			msg: 'No se encontro el carrito o no existe',
		});
	}
}
