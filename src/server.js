import Express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import initApiRouter from "./routes/api";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import configCors from "./config/CORS";
import { createJWT, verifyToken } from "./middleware/jwtAction";
require("dotenv").config();
const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configCors(app);
connection();
configViewEngine(app);
createJWT();
let decodedData = verifyToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9hbiIsImlhdCI6MTY5NjU2MzEzMn0.4GA2H-so6lDRSzbXJC-UZOfkmkiOqebEagvV8vggTz0"
);
console.log(decodedData);
initWebRouter(app);
initApiRouter(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
