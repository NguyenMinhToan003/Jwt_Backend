import Express from "express";

const configViewEngine = (app) => {
  app.use(Express.static("./src/public"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};
export default configViewEngine;
