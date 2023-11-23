import db from "../models/index";
const readGroupWithRole = async (group) => {
  try {
    let role = await db.Groups.findOne({
      where: { id: group },
      attributes: ["name", "id", "description"],
      include: [
        {
          model: db.Roles,
          attributes: ["id", "url"],
          through: { attributes: [] },
        },
      ],
    });

    return {
      EM: `Select Group With Role: ${role.Roles.length}`,
      EC: 0,
      DT: role,
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
