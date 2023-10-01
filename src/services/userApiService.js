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
const getUserPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.datausers.findAndCountAll({
      attributes: ["id", "name", "email", "gender", "address"],
      include: [{ model: db.Groups, attributes: ["name", "description"] }],
      offset: offset,
      limit: +limit,
    });
    let totalPage = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPage: totalPage,
      user: rows,
    };
    console.log(">>>>>> check data : ", data);

    return {
      EM: `Data User of Pagination ${page} and limit = ${limit}`,
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
  getUserPagination,
  updateUser,
  createUser,
  deleteUser,
};
