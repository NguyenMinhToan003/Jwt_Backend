import Express from "express";
import homeController from "../controllers/homeController";
import ssoContronler from "../controllers/ssoControler";
import test from "../controllers/test";
const router = Express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/login", ssoContronler.login);
  router.get("/user", homeController.handlerUser);
  router.get("/signup", homeController.handlerSignup);
  router.post("/create-user", homeController.handlerCreateUser);
  router.get("/signin", homeController.handlerSignin);
  router.get("/centerListUser", homeController.handlerCenterListUser);
  router.get("/about", homeController.handlerAbout);
  router.post("/deleteUser/:id", homeController.handlerDeleteUser);
  router.get("/editUser/:id", homeController.handlerEditUser);
  router.post("/updateUser", homeController.handlerUpdateUser);
  router.get("/user-detail/:id", homeController.handlerUserDetail);
  router.post("/themkhachhang", test.themkhachhang);
  return app.use("/", router);
};
export default initWebRouter;
