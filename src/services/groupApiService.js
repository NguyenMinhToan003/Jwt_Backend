import db from "../models/index";
const readGroup = async () => {
  try {
    let data = await db.Groups.findAll({
      raw: true,
      attributes: ["name", "description", "id"],
    });
    return {
      EM: "Complete Select Group !",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    return {
      EM: "ERROR from Group",
      EC: -1,
      DT: "data",
    };
  }
};

module.exports = {
  readGroup,
};
