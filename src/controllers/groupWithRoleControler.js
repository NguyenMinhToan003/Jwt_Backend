import groupWithRole from "../services/groupWithRoleService";
const readFunc = async (req, res) => {
  try {
    let data = await groupWithRole.readGroupWithRole(req.query.id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = { readFunc };
