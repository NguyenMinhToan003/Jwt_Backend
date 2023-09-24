import Express from "express";
import apiData from "../controllers/apidData";
import apiControler from "../controllers/apiControler";
const router = Express.Router();

const initApiRouter = (app) => {
  router.post("/signup", apiControler.handlerSignUp);
  router.post("/login", apiControler.handlerLogin);
  router.get("/dataApi", apiData.dataApi);
  return app.use("/api/v1", router);
};
export default initApiRouter;
