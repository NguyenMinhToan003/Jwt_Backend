import Express from "express";
import apiController from "../controllers/apiController";
const router = Express.Router();

const initApiRouter = (app) => {
  router.get("/api/v1/test", apiController.testApi);

  return app.use("/", router);
};
export default initApiRouter;
