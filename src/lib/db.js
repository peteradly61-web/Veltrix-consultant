import mysql from 'mysql2/promise';

// Create a connection pool using environment variables or hardcoded fallbacks
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : '',
  database: process.env.DB_NAME || 'webdata',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
