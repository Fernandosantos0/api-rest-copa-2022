import mysql from 'mysql2';

export default mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'americalatina',
    database: 'db_copa',
    timezone: '+03:00',
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0    
});