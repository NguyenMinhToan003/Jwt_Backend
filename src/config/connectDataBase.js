// get the client
import mysql from "mysql2/promise";
// create the connection to database
console.log("creating connectDatabsae .....");
const pool = mysql.createPool({
  host: "localhost:8080",
  user: "root",
  database: "jwt_database",
  // password:"password"
});
export default pool;
