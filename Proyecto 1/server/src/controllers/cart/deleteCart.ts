import { Request, Response } from 'express';
import fs from 'fs';

export default function deleteCart(req: Request, res: Response) {
	try {
		const { id } = req.params;

		fs.unlinkSync(`src/utils/mockups/carts/${id}.JSON`);

		res.status(200).json({
			ok: true,
			msg: `El carrito ${id} se elimino exitosamente`,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			ok: false,
			msg: 'No se encontro el carrito o no existe',
		});
	}
}
