import { Express } from "express";
import bcrypt from "bcrypt";
import pool from "../configs/connectDataBase";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewUser = async (email, password, name) => {
  const hashPass = hashPassword(password);
  await pool.execute(
    `INSERT INTO datauser (name,password,email) VALUES (?,?,?) `,
    [name, hashPass, email]
  );
};
const loadListUser = async () => {
  const [rows, fields] = await pool.execute("SELECT * FROM `datauser` ");
  return rows;
};
module.exports = {
  hashPassword,
  createNewUser,
  loadListUser,
};
