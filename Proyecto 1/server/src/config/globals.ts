import dotenv from 'dotenv';

dotenv.config();

export const dbTest: string = process.env.DB_TESTING || '';
export const dbDev: string = process.env.DB_DEVELOPMENT || '';
export const portTest = process.env.PORT_TESTING || process.env.PORT;
export const portDev = process.env.PORT_DEVELOPMENT || process.env.PORT;
export const baseUrl: string = process.env.BASE_URL || 'http://localhost:8080';
