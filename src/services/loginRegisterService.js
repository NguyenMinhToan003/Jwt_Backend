import bcrypt from "bcrypt";
import db from "../models/index";
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

const registerUser = async (rawData) => {
  try {
    let checkEmail = await checkEmailExist(rawData.email);
    let checkPhone = await checkPhoneExist(rawData.phone);
    if (rawData.length < 3) {
      return {
        EM: "Length password > 3",
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
      groupId: rawData.major,
      gender: rawData.gender,
      name: rawData.name,
    });
    return {
      EM: "Create account complete",
      EC: 0,
    };
  } catch (er) {
    return {
      EM: "Error create account ",
      EC: -2,
    };
  }
};

module.exports = {
  registerUser,
};
