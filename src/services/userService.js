import bcrypt from "bcrypt";
<<<<<<< HEAD
// import pool from "../config/connectDataBase";
=======
import pool from "../config/connectDataBase";
>>>>>>> 9b19918 (ORM update create delete user)
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewUser = async (email, password, name) => {
  const hashPass = hashPassword(password);
  // await pool.execute(
<<<<<<< HEAD
  //   `INSERT INTO User (name,password,email) VALUES (?,?,?) `,
  //   [name, hashPass, email]
  // );
  await db.User.create({
    name: name,
    email: email,
    password: hashPass,
    gender: "male",
    address: "HCM city",
    phone: 123456,
    groupId: 1,
=======
  //   `INSERT INTO datausers (name,password,email) VALUES (?,?,?) `,
  //   [name, hashPass, email]
  // );
  await db.datausers.create({
    name: name,
    email: email,
    password: hashPass,
>>>>>>> 9b19918 (ORM update create delete user)
  });
};
const loadListUser = async () => {
  let data = [];
<<<<<<< HEAD
  data = await db.User.findAll();
  // const [rows, fields] = await pool.execute("SELECT * FROM `User` ");
  return data;
};
const deleteUser = async (idUser) => {
  await db.User.destroy({
=======
  data = await db.datausers.findAll();
  // const [rows, fields] = await pool.execute("SELECT * FROM `datausers` ");
  return data;
};
const deleteUser = async (idUser) => {
  await db.datausers.destroy({
>>>>>>> 9b19918 (ORM update create delete user)
    where: { id: idUser },
  });
};
const editUser = async (id, name, email, password) => {
  let hashPass = hashPassword(password);
<<<<<<< HEAD
  await db.User.update(
=======
  await db.datausers.update(
>>>>>>> 9b19918 (ORM update create delete user)
    { name: name, email: email, password: hashPass },
    {
      where: {
        id: id,
      },
    }
  );
  // await pool.execute(
<<<<<<< HEAD
  //   "UPDATE User SET name = ?, email= ?,  password= ? WHERE id = ?;",
=======
  //   "UPDATE datausers SET name = ?, email= ?,  password= ? WHERE id = ?;",
>>>>>>> 9b19918 (ORM update create delete user)
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
