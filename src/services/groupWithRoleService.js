import db from "../models/index";
const readGroupWithRole = async (group) => {
  try {
    let roles = await db.Groups.findAll({
      where: { id: group.id },
      raw: true,
      attributes: ["name", "description"],
      include: [
        {
          model: db.Roles,
          attributes: ["id", "url"],
          through: { attributes: [] },
        },
      ],
    });
    return {
      EM: "Select Group With Role",
      EC: 0,
      DT: roles,
    };
  } catch (error) {
    return {
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    };
  }
};
module.exports = { readGroupWithRole };
