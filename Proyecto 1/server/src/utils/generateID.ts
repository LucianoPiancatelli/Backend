export const generarIdProduct = (): string => {
	return Math.random().toString(30).substring(2);
};
export const generarIdCart = (): string => {
	const idCart = `cart-${Math.random().toString(30).substring(2)}`;
	return idCart;
};
