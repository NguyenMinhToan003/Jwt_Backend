import Express from "express";
import userService from "../services/userService";
import pool from "../config/connectDataBase";
let getHomepage = async (req, res) => {
  return res.render("home.ejs");
};

const handlerUser = async (req, res) => {
  const listUser = await userService.loadListUser();
  return res.render("listUser.ejs", { dataUsers: listUser });
};
const handlerSignup = (req, res) => {
  return res.render("signUp.ejs");
};
const handlerCreateUser = async (req, res) => {
  let { email, name, password } = req.body;
  if (email && name && password) {
    userService.createNewUser(email, password, name);
  } else return;
  return res.redirect("/centerListUser");
};
const handlerSignin = (req, res) => {
  return res.render("signIn.ejs");
};
const handlerCenterListUser = async (req, res) => {
  let listData = await userService.loadListUser();
  return res.render("centerListUser.ejs", { data: listData });
};
const handlerAbout = (req, res) => {
  return res.render("about.ejs");
};
const handlerDeleteUser = async (req, res) => {
  const { id } = req.body;
  await userService.deleteUser(id);
  // await pool.execute(`DELETE  FROM datausers WHERE ID = ?`, [id]);
  return res.redirect(`/centerListUser`);
};
const handlerEditUser = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from datausers where ID = ?`, [id]);
  return res.render("updateUser.ejs", { data: user[0] });
};
const handlerUpdateUser = async (req, res) => {
  let { name, email, id, password } = req.body;
  if (!(name && email && id && password)) return res.send("can not invalid");
  await userService.editUser(id, name, email, password);

  return res.redirect("/centerListUser");
};
const handlerUserDetail = async (req, res) => {
  console.log("this is detail user");
  let id = req.params.id;
  let [user] = await pool.execute(`select * from datausers where ID = ?`, [id]);
  return res.render("userDetail.ejs", { data: user[0] });
};
module.exports = {
  handlerUser,
  handlerSignup,
  getHomepage,
  handlerCreateUser,
  handlerSignin,
  handlerCenterListUser,
  handlerAbout,
  handlerDeleteUser,
  handlerEditUser,
  handlerUpdateUser,
  handlerUserDetail,
};
