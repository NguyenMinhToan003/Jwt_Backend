import bcrypt from "bcrypt";
import pool from "../config/connectDataBase";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewUser = async (email, password, name) => {
  const hashPass = hashPassword(password);
  // await pool.execute(
  //   `INSERT INTO datausers (name,password,email) VALUES (?,?,?) `,
  //   [name, hashPass, email]
  // );
  await db.datausers.create({
    name: name,
    email: email,
    password: hashPass,
  });
};
const loadListUser = async () => {
  let data = [];
  data = await db.datausers.findAll();
  // const [rows, fields] = await pool.execute("SELECT * FROM `datausers` ");
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
  // await pool.execute(
  //   "UPDATE datausers SET name = ?, email= ?,  password= ? WHERE id = ?;",
  //   [name, email, hashPass, id]
  // );
};
module.exports = {
  hashPassword,
  createNewUser,
  loadListUser,
  deleteUser,
  editUser,
};
