import { Request, Response } from 'express';
import fs from 'fs';
import { Cart } from '../../interfaces';
import { generarIdCart } from '../../utils';

export default function postCart(_req: Request, res: Response) {
	try {
		const idCart = generarIdCart();
		const newCart: Cart = {
			id: idCart,
			timestamp: new Date().toLocaleString('es-AR'),
			products: [],
		};
		fs.writeFileSync(
			`src/utils/mockups/carts/${idCart}.JSON`,
			JSON.stringify(newCart, null, 2),
		);
		res.status(200).json({ newCart });
	} catch (error) {
		console.log(error);
		res.status(404).json({
			ok: false,
			msg: 'No existe el carrito',
		});
	}
}
