require("dotenv").config();
import jwt from "jsonwebtoken";

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
  let data = null;
  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  //   jwt.verify(token, key, function (err, decoded) {
  //     if (err) {
  //       console.log(err);
  //       return data;
  //     }

  //   });
  return data;
};

export { createJWT, verifyToken };
