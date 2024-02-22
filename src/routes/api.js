import Express from "express";
import roleContronler from "../controllers/roleContronler";
import groupContronler from "../controllers/groupContronler";
import apiControler from "../controllers/apiControler";
import groupWithRoleControler from "../controllers/groupWithRoleControler";
import userContronler from "../controllers/userControler";
import ebookContronler from "../controllers/ebookContronler.js";
import cartController from "../controllers/cartController.js";
import { checkJWTToken, checkPermission } from "../middleware/jwtAction";
import multer from "multer";
import { storageEbook } from "../services/upload";
const router = Express.Router();
const upload = multer({ storage: storageEbook });
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
  router.get("/groupwithrole", groupWithRoleControler.readFunc);
  router.get("/role", roleContronler.readAll);
  router.post("/groupwithrole/create", groupWithRoleControler.createFunc);

  // api ebook
  router.post(
    "/ebook/upload",
    upload.single("image"),
    ebookContronler.ebookUpload
  );
  router.get("/ebook/read", ebookContronler.ebookRead);
  router.get("/ebook/detail", ebookContronler.ebookDetail);
  router.post("/cart/load", cartController.cartLoad);

  return app.use("/api/v1", router);
};
export default initApiRouter;
