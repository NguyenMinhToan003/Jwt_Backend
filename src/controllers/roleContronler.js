import roleApiService from "../services/roleApiService";
const readFunc = async (req, res) => {
  try {
    let limit = req.query.limit;
    let page = req.query.page;
    let role = await roleApiService.getUserPagination(page, limit);
    return res.status(200).json({
      EM: role.EM,
      EC: role.EC,
      DT: role.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};

const createFunc = async (req, res) => {
  try {
    const role = await roleApiService.createRole(req.body);
    return res.status(200).json({
      EM: role.EM,
      EC: role.EC,
      DT: role.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
const updateFunc = async (req, res) => {
  try {
    let status = await roleApiService.updateRole(req.body);

    return res.status(200).json({
      EM: status.EM,
      EC: status.EC,
      DT: status.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
const deleteFunc = async (req, res) => {
  try {
    let status = await roleApiService.deleteRole(req.query.id);
    return res.status(200).json({
      EM: status.EM,
      EC: status.EC,
      DT: status.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
const readAll = async (req, res) => {
  try {
    let role = await roleApiService.readRole();
    return res.status(200).json({
      EM: role.EM,
      EC: role.EC,
      DT: role.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = {
  createFunc,
  updateFunc,
  deleteFunc,
  readFunc,
  readAll,
};
