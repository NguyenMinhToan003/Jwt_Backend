import Express from "express";
import apiData from "../controllers/apidData";
import apiControler from "../controllers/apiControler";
const router = Express.Router();

const initApiRouter = (app) => {
  router.post("/reg", apiControler.handlerSignUp);
  router.get("/test", apiData.testApi);
  return app.use("/api/v1", router);
};
export default initApiRouter;
