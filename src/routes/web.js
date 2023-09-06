import Express from "express";

const router = Express.Router();

const initWebRouter = (app) => {
  router.get("/", (req, res) => {
    return res.send(console.log("this is init web routes"));
  });
  return app.use("/", router);
};
export default initWebRouter;
