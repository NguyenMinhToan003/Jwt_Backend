import Express from "express";
import pool from "../configs/connectDataBase";

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `datauser` ");
  return res.send("this is home page");
};

const handlerUser = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM `datauser` ");
  return res.render("listUser.ejs", { dataUsers: rows });
};
const handlerSignup = (req, res) => {
  return res.render("signUp.ejs");
};
const handlerCreateUser = async (req, res) => {
  let { email, name, password } = req.body;
  await pool.execute(
    `INSERT INTO datauser (name,password,email) VALUES (?,?,?) `,
    [name, password, email]
  );
  return res.send("this is create user");
};
module.exports = { handlerUser, handlerSignup, getHomepage, handlerCreateUser };
