import userApiService from "../services/userApiService";

const readFunc = async (req, res) => {
  try {
    let users = await userApiService.getAllUser();
    return res.status(500).json({
      EM: users.EM,
      EC: users.EC,
      DT: users.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "ERROR from server",
      EC: "1",
      DT: "",
    });
  }
};
const createFunc = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
const updateFunc = async (req, res) => {
  try {
    let data = req.body;
    await userApiService.updateUser(user);
  } catch (error) {
    console.log(error);
  }
};
const deleteFunc = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
};
