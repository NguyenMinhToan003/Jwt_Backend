import Express from "express";
import userService from "../services/userService";
import pool from "../configs/connectDataBase";
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
  return res.send("this is create user");
};
const handlerSignin = (req, res) => {
  return res.render("signIn.ejs");
};
const handlerCenterListUser = async (req, res) => {
  let listData = await userService.loadListUser();
  return res.render("centerListUser.ejs", { data: listData });
};
module.exports = {
  handlerUser,
  handlerSignup,
  getHomepage,
  handlerCreateUser,
  handlerSignin,
  handlerCenterListUser,
};
