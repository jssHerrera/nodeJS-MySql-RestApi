import { config } from "dotenv";

config();

export const PORT = process.env.PORT


export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'secret'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_BATABASE = process.env.DB_BATABASE || companydb
export const DB_PORT = process.env.DB_PORT || 3306
