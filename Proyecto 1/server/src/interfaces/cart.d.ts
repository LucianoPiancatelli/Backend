import { Product } from './index';

interface Cart {
	id: string;
	timestamp: string;
	products: Array<Product>;
}
