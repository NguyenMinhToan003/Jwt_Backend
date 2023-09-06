import Express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);
initWebRouter(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
