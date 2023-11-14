import userApiService from "../services/userApiService";
const readFunc = async (req, res) => {
  try {
    if (req.query.limit && req.query.page) {
      let limit = req.query.limit;
      let page = req.query.page;
      let users = await userApiService.getUserPagination(page, limit);
      return res.status(200).json({
        EM: users.EM,
        EC: users.EC,
        DT: users.DT,
      });
    } else {
      let users = await userApiService.getAllUser();
      return res.status(200).json({
        EM: users.EM,
        EC: users.EC,
        DT: users.DT,
      });
    }
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
    let newAccount = await userApiService.createUser(req.body);
    return res.status(200).json({
      EM: newAccount.EM,
      EC: newAccount.EC,
      DT: newAccount.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      RM: "ERROR from server",
      EC: -1,
      DT: [],
    });
  }
};
const updateFunc = async (req, res) => {
  try {
    let dataUpdate = await userApiService.updateUser(req.body);
    return res.status(200).json({
      EM: dataUpdate.EM,
      EC: dataUpdate.EC,
      DT: dataUpdate.DT,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      EM: "ERROR from server",
      EC: -1,
      DT: [],
    });
  }
};
const deleteFunc = async (req, res) => {
  try {
    let data = await userApiService.deleteUser(req.body.id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "ERROR from server",
      EC: "1",
      DT: [],
    });
  }
};
const getAccount = async (req, res) => {
  return res.status(200).json({
    EM: "ok",
    EC: 0,
    DT: {
      acess_token: req.token,
      groupWithRole: req.user.groupWithRole,
      email: req.user.email,
      name: req.user.name,
    },
  });
};
module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
  getAccount,
};
