import db from "../models";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const checkEmailExist = async (email) => {
  let account = await db.datausers.findOne({ where: { email: email } });
  if (account === null) return false;
  return true;
};
const checkPhoneExist = async (phone) => {
  let account = await db.datausers.findOne({ where: { phone: phone } });
  if (account === null) return false;
  return true;
};
const getAllUser = async () => {
  try {
    let data = await db.datausers.findAll({
      attributes: [
        "id",
        "name",
        "email",
        "gender",
        "address",
        "phone",
        "groupId",
      ],
      include: [{ model: db.Groups, attributes: ["name", "description"] }],
    });

    return {
      EM: "Fetch Data User",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "not found data",
      EC: 2,
      DT: [],
    };
  }
};
const getUserPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.datausers.findAndCountAll({
      attributes: [
        "id",
        "name",
        "email",
        "gender",
        "address",
        "phone",
        "groupId",
      ],
      include: [{ model: db.Groups, attributes: ["name", "description"] }],
      offset: offset,
      limit: +limit,
      order: [["id", "DESC"]],
    });

    let totalPage = Math.ceil(count / limit);
    let data = {
      totalRows: count,
      totalPage: totalPage,
      user: rows,
    };
    return {
      EM: `Data User of Pagination ${page} and limit = ${limit}`,
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "not found data",
      EC: 2,
      DT: [],
    };
  }
};
const updateUser = async (rawData) => {
  try {
    let user = await db.datausers.findOne({ where: { id: +rawData.id } });
    if (user) {
      user.update({
        name: rawData.name,
        address: rawData.address,
        groupId: rawData.groupId,
        gender: rawData.gender,
      });
      return {
        EM: "Update Account succes !",
        EC: 0,
        DT: user,
      };
    } else {
      return {
        EM: "User Empty",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR by Update Service",
      EC: -2,
      DT: "",
    };
  }
};
const createUser = async (rawData) => {
  try {
    let checkEmail = await checkEmailExist(rawData.email);
    let checkPhone = await checkPhoneExist(rawData.phone);
    if (checkEmail) return { EM: "Email is Exist", EC: 3, DT: [] };
    if (checkPhone) return { EM: "Phone is Exist", EC: 3, DT: [] };
    let hashPass = hashPassword(rawData.password);
    let newUser = await db.datausers.create({
      email: rawData.email,
      password: hashPass,
      name: rawData.name,
      address: rawData.address,
      phone: rawData.phone,
      groupId: rawData.groupId,
      gender: rawData.gender,
    });
    return {
      EM: "create new account",
      EC: 0,
      DT: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR by CreateService",
      EC: -1,
      DT: [],
    };
  }
};
const deleteUser = async (id) => {
  try {
    let user = await db.datausers.findOne({ where: { id: id } });
    if (user) {
      await user.destroy();
      return {
        EM: `Delete User by id : ${id}`,
        EC: 0,
        DT: "",
      };
    }
    return {
      EM: "User is not exist ",
      EC: 2,
      DT: "",
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR by deleteService ",
      EC: -2,
      DT: "",
    };
  }
};

module.exports = {
  getAllUser,
  getUserPagination,
  updateUser,
  createUser,
  deleteUser,
};
