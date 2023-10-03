import Express from "express";
import apiData from "../controllers/apidData";
import apiControler from "../controllers/apiControler";
import userContronler from "../controllers/userControler";
const router = Express.Router();

const initApiRouter = (app) => {
  router.post("/signup", apiControler.handlerSignUp);
  router.post("/login", apiControler.handlerLogin);
  router.get("/dataApi", apiData.dataApi);
  router.get("/user/read", userContronler.readFunc);
  router.post("/user/create", userContronler.createFunc);
  router.put("/user/update", userContronler.updateFunc);
  router.delete("/user/delete", userContronler.deleteFunc);

  return app.use("/api/v1", router);
};
export default initApiRouter;
