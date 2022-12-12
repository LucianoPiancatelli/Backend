import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { portDev, portTest } from './config';
import { router } from './routes';
/* import { fileURLToPath } from 'url';
import { dirname } from 'path'; */

dotenv.config();

/* export const __dirname = dirname(fileURLToPath(import.meta.url)); */
/* const db = process.env.NODE_ENV === 'development' ? dbDev : dbTest; */
const port = process.env.NODE_ENV === 'development' ? portDev : portTest;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', router);

app.listen(port, async () => {
	console.log(`Server listening on port: ${port}`);
});
