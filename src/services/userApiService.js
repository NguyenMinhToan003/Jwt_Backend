import db from "../models";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const getAllUser = async () => {
  try {
    let data = await db.datausers.findAll({
      attributes: ["id", "name", "email", "gender", "address"],
      include: [{ model: db.Groups, attributes: ["name", "description"] }],
    });

    console.log(">>>> check data : ", data);
    return {
      EM: "Data All user",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "not found",
      EC: 1,
      DT: [],
    };
  }
};
const updateUser = async (data) => {
  try {
  } catch (error) {
    console.log(error);
    return {
      EM: "something wrong",
      EC: -1,
      DT: "",
    };
  }
};
const createUser = async (data) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = (id) => {};

module.exports = {
  getAllUser,
  updateUser,
  createUser,
  deleteUser,
};
