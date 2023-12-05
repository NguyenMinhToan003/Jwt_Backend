require("dotenv").config();
import Express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import initApiRouter from "./routes/api";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import configCors from "./config/CORS";
import cookieParser from "cookie-parser";
import path from "path";
const app = Express();

// CORS
configCors(app);
// Connection Database
connection();

configViewEngine(app);

// use json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cooke
app.use(cookieParser());
app.use("/assets", Express.static(path.join(__dirname, "/assets")));

// Router
initWebRouter(app);
initApiRouter(app);

// 404 not found
app.use((req, res) => {
  return res.send("404 not found");
});

// port
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
