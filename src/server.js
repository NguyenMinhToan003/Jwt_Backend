import Express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
require("dotenv").config();
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection();
configViewEngine(app);
initWebRouter(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
