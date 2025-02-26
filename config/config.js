import {createPool} from 'mysql2/promise';
import {config} from 'dotenv';
config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
})

export {pool}