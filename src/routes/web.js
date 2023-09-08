import Express from "express";
import homeController from "../controllers/homeController";
const router = Express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/user", homeController.handlerUser);
  router.get("/signup", homeController.handlerSignup);
  router.post("/create-user", homeController.handlerCreateUser);
  router.get("/signin", homeController.handlerSignin);
  router.get("/centerListUser", homeController.handlerCenterListUser);
  return app.use("/", router);
};
export default initWebRouter;
