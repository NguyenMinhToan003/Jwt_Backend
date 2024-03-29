require("dotenv").config();
import bcrypt, { hash } from "bcrypt";
import { Op } from "sequelize";
import db from "../models/index";
import { getGroupWithRole } from "./jwtService";
import { createJWT } from "../middleware/jwtAction";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const checkEmailExist = async (email) => {
  let account = await db.datausers.findOne({ where: { email: email } });
  if (account === null) return true;
  return false;
};
const checkPhoneExist = async (phone) => {
  let account = await db.datausers.findOne({ where: { phone: phone } });
  if (account === null) return true;
  return false;
};
const checkPassword = (inputPass, hashPass) => {
  let check = bcrypt.compare(inputPass, hashPass);
  return check;
};
const registerUser = async (rawData) => {
  try {
    let checkEmail = await checkEmailExist(rawData.email);
    let checkPhone = await checkPhoneExist(rawData.phone);
    if (rawData.password.length < 3) {
      return {
        EM: "Length password >= 3",
        EC: 2,
      };
    }
    if (!checkEmail) {
      return {
        EM: "Exist email",
        EC: 2,
      };
    }
    if (!checkPhone) {
      return {
        EM: "Exist phone number",
        EC: 2,
      };
    }

    // hash password
    let hassPass = hashPassword(rawData.password);
    // create user
    await db.datausers.create({
      email: rawData.email,
      password: hassPass,
      address: rawData.address,
      phone: rawData.phone,
      groupId: rawData.groupId,
      gender: rawData.gender,
      name: rawData.name,
    });
    return {
      EM: "Create account complete",
      EC: 0,
    };
  } catch (er) {
    console.log(er);
    return {
      EM: "Error create account ",
      EC: -2,
    };
  }
};

const LoginUser = async (rawData) => {
  try {
    let accountUser = await db.datausers.findOne({
      where: {
        [Op.or]: [{ email: rawData.account }, { phone: rawData.account }],
      },
      raw: true,
    });
    if (accountUser !== null) {
      console.log(">>>>>>Check Password .... ");
      let checkPass = await checkPassword(
        rawData.password,
        accountUser.password
      );

      if (checkPass) {
        let groupWithRole = await getGroupWithRole(accountUser);
        let payload = {
          email: accountUser.email,
          groupWithRole,
          name: accountUser.name,
          id: accountUser.id,
        };
        let token = createJWT(payload);
        console.log(">>>>>> Complete Login");
        return {
          EM: `Welcome ${accountUser.name}`,
          EC: 0,
          DT: {
            acess_token: token,
            email: accountUser.email,
            name: accountUser.name,
            id: accountUser.id,
            groupWithRole,
          },
        };
      }
    }
    console.log(">>>>>> dont Login");
    return {
      EM: "Emai/Phone/Password is Error",
      EC: 2,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR by LoginService",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  registerUser,
  LoginUser,
};
