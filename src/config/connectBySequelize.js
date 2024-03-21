// connection in sequelize
import { Sequelize } from "sequelize";
import config from "./config.json"; // Import tập tin cấu hình

// Khoi tao thong tin ket noi tu config.json
const { username, password, database, host, dialect } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default connection;
