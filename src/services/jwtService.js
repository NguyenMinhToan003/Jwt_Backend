import db from "../models";

const getGroupWithRole = async (user) => {
  let roles = await db.Groups.findOne({
    where: { id: 1 },
    attribute: ["id", "name", "description"],
    include: [{ model: db.Roles, attribute: ["id", "url"] }],
  });
  return roles ? roles : {};
};

module.exports = { getGroupWithRole };
