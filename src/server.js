require("dotenv").config();
import Express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import initApiRouter from "./routes/api";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import configCors from "./config/CORS";
import cookieParser from "cookie-parser";
const app = Express();

configCors(app);
connection();
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// config cooke
app.use(cookieParser());

initWebRouter(app);
initApiRouter(app);

// 404 not found
app.use((req, res) => {
  return res.send("404 not found");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
