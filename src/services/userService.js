import { Express } from "express";
import bcrypt from "bcrypt";
import pool from "../config/connectDataBase";
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
const createNewUser = async (email, password, name) => {
  const hashPass = hashPassword(password);
  await pool.execute(
    `INSERT INTO datausers (name,password,email) VALUES (?,?,?) `,
    [name, hashPass, email]
  );
};
const loadListUser = async () => {
  const [rows, fields] = await pool.execute("SELECT * FROM `datausers` ");
  return rows;
};

module.exports = {
  hashPassword,
  createNewUser,
  loadListUser,
};
