import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "quanlyphanmem",
  // password: "your_password_here",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
