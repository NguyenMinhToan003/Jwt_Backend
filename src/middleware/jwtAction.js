require("dotenv").config();
import jwt, { decode } from "jsonwebtoken";
const nonSecurePaths = ["/login", "/signup"];

const createJWT = (payload) => {
  let token = null;
  let key = process.env.JWT_SECRET;
  try {
    token = jwt.sign(payload, key);
  } catch (error) {
    console.log(error);
  }
  return token;
};
const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};
const checkJWTToken = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  let cookie = req.cookies;
  if (cookie && cookie.jwt) {
    let decoded = verifyToken(cookie.jwt);
    if (decoded) {
      req.user = decoded;
      next();
    } else
      return res.status(401).json({
        EC: -1,
        EM: "Not authenticate !",
        DT: "",
      });
  } else {
    return res.status(401).json({
      EC: -1,
      EM: "Not authenticate !",
      DT: "",
    });
  }
};
const checkPermission = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  if (req.user) {
    let email = req.user.email;
    let role = req.user.groupWithRole.Roles;
    let currentUrl = req.path;
    if (!role && role.length == 0)
      return res.status(403).json({
        EC: -1,
        EM: "You dont Permission to access resource...",
        DT: "",
      });
    let canAccess = role.some((item) => item.url === currentUrl);
    if (canAccess) next();
    else
      return res.status(403).json({
        EC: -1,
        EM: "You dont Permission to access resource...",
        DT: "",
      });
  } else
    return res.status(401).json({
      EC: -1,
      EM: "Not authenticate !",
      DT: "",
    });
};

export { createJWT, verifyToken, checkJWTToken, checkPermission };
