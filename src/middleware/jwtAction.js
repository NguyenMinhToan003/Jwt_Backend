require("dotenv").config();
import jwt from "jsonwebtoken";
const nonSecurePaths = ["/login", "/signup"];

const createJWT = (payload) => {
  let token = null;
  let key = process.env.JWT_SECRET;
  try {
    token = jwt.sign(payload, key, { expiresIn: process.env.JWT_EXPIRES_IN });
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
const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
const checkJWTToken = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next();
  let cookie = req.cookies;
  let headerToken = extractToken(req);
  if ((cookie && cookie.jwt) || headerToken) {
    let token = cookie && cookie.jwt ? cookie.jwt : headerToken;
    let decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      req.token = token;
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
  if (nonSecurePaths.includes(req.path) || req.path === "/account")
    return next();
  if (req.user) {
    let role = req.user.groupWithRole.Roles;
    let currentUrl = req.path;
    if (!role && role.length < 0)
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
        role,
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
