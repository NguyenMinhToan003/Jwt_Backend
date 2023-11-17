import db from "../models/index";
const readRole = async () => {
  try {
    let curentRole = await db.Roles.findAll({
      attributes: ["url", "description"],
      raw: true,
    });
    return {
      EM: "Display Roles done !",
      EC: 0,
      DT: curentRole,
    };
  } catch {
    return {
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    };
  }
};
const createRole = async (role) => {
  try {
    let curentRole = await db.Roles.findAll({
      attributes: ["url", "description"],
      raw: true,
    });
    let rolePersist = role.filter(
      ({ url: url1 }) => !curentRole.some(({ url: url2 }) => url1 === url2)
    );
    if (rolePersist.length == 0) {
      return {
        EM: "Nothing create Role",
        EC: 0,
        DT: "",
      };
    }
    db.Roles.bulkCreate(rolePersist);
    return {
      EM: `Create done Role : ${rolePersist.length}`,
      EC: 0,
      DT: "",
    };
  } catch (error) {
    return {
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    };
  }
};
module.exports = { createRole, readRole };
