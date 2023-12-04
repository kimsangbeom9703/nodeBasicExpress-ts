import mysql, { PoolOptions } from 'mysql2';

const access: PoolOptions = {
    host: 'localhost',
    user: 'root',
    database: 'pin_social_share_svr_real',
    password: 'qkek#dusvlf',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

const conn = mysql.createPool(access);

export default conn;
