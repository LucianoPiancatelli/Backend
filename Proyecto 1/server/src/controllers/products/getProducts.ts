import { Request, Response } from 'express';
import fs from 'fs';

export default function getProducts(_req: Request, res: Response) {
	try {
		const products = JSON.parse(
			fs.readFileSync('src/utils/mockups/mockProducts.JSON', 'utf-8'),
		);
		let status;
		let response;
		if (products.length === 0) {
			status = 404;
			response = {
				msg: 'No hay productos cargados',
			};
		} else {
			status = 200;
			response = products;
		}
		res.status(status).json({ response });
	} catch (error) {
		console.log(error);
	}
}
