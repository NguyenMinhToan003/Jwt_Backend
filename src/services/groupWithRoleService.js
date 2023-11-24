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
    console.log(error);
    return {
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    };
  }
};

const createGroupWithRole = async (data) => {
  try {
    if (data[0].isEmpty) {
      await db.Group_Roles.destroy({ where: { groupId: data[0].GroupId } });
    } else {
      await db.Group_Roles.destroy({ where: { groupId: data[0].GroupId } });
      let groupRole = await db.Group_Roles.bulkCreate(data);
    }
    return {
      EM: `Update Complete! `,
      EC: 0,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR from Server",
      EC: -1,
      DT: "",
    };
  }
};
module.exports = { readGroupWithRole, createGroupWithRole };
