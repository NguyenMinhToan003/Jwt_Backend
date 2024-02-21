import db from "../models/index";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewUser = async (email, password, name) => {
  const hashPass = hashPassword(password);
  await db.datausers.create({
    name: name,
    email: email,
    password: hashPass,
  });
};
const loadListUser = async () => {
  let data = [];
  data = await db.datausers.findAll();

  return data;
};
const deleteUser = async (idUser) => {
  await db.datausers.destroy({
    where: { id: idUser },
  });
};
const editUser = async (id, name, email, password) => {
  let hashPass = hashPassword(password);
  await db.datausers.update(
    { name: name, email: email, password: hashPass },
    {
      where: {
        id: id,
      },
    }
  );
};
module.exports = {
  hashPassword,
  createNewUser,
  loadListUser,
  deleteUser,
  editUser,
};
