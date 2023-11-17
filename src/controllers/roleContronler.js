import roleApiService from "../services/roleApiService";
const readFunc = async (req, res) => {
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
const createFunc = async (req, res) => {
  try {
    const role = await roleApiService.createRole(req.body);
    console.log(role);
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
  return res.status(500).json({
    EM: "ERROR from Server",
    EC: -1,
    DT: "",
  });
};
const deleteFunc = async (req, res) => {
  return res.status(500).json({
    EM: "ERROR from Server",
    EC: -1,
    DT: "",
  });
};
module.exports = { createFunc, updateFunc, deleteFunc, readFunc };
