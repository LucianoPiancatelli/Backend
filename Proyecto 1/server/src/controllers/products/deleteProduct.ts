import { Request, Response } from 'express';
import fs from 'fs';
import { Product } from '../../interfaces';

export default function deleteProduct(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const products = JSON.parse(
			fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
		);
		console.log(products);
		let status;
		let response;
		if (!products.some((elem: Product) => elem.id === id)) {
			status = 404;
			response = {
				msg: 'No existe ese producto',
			};
		} else {
			status = 200;
			const newListProducts = products.filter(
				(elem: Product) => elem.id !== id,
			);
			fs.writeFileSync(
				'src/utils/mockups/mockProducts.JSON',
				JSON.stringify(newListProducts, null, 2),
			);
			response = {
				ok: true,
				msg: 'Producto eliminado con exito',
			};
		}
		res.status(status).json({ response });
	} catch (error) {
		console.log(error);
	}
}
