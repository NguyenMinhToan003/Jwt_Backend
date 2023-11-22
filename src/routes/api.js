import Express from "express";
import roleContronler from "../controllers/roleContronler";
import groupContronler from "../controllers/groupContronler";
import apiControler from "../controllers/apiControler";
import groupWithRoleControler from "../controllers/groupWithRoleControler";
import userContronler from "../controllers/userControler";
import { checkJWTToken, checkPermission } from "../middleware/jwtAction";

const router = Express.Router();

const initApiRouter = (app) => {
  router.all("*", checkJWTToken, checkPermission);
  router.post("/signup", apiControler.handlerSignUp);
  router.post("/login", apiControler.handlerLogin);
  router.post("/logout", apiControler.handlerLogout);

  // api user
  router.get("/account", userContronler.getAccount);
  router.get("/user/read", userContronler.readFunc);
  router.post("/user/create", userContronler.createFunc);
  router.put("/user/update", userContronler.updateFunc);
  router.delete("/user/delete", userContronler.deleteFunc);

  // api role
  router.get("/role/read", roleContronler.readFunc);
  router.post("/role/create", roleContronler.createFunc);
  router.put("/role/update", roleContronler.updateFunc);
  router.delete("/role/delete", roleContronler.deleteFunc);

  // api Group
  router.get("/group/read", groupContronler.readFunc);
  router.post("/group/create", groupContronler.createFunc);
  router.put("/group/update", groupContronler.updateFunc);
  router.delete("/group/delete", groupContronler.deleteFunc);

  // api group with role
  router.post("/groupwithrole", groupWithRoleControler.readFunc);

  return app.use("/api/v1", router);
};
export default initApiRouter;
