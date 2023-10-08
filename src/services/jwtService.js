import db from "../models";

const getGroupWithRole = async (user) => {
  let roles = await db.Groups.findOne({
    where: { id: user.id },
    attributes: ["id", "name", "description"],
    include: [
      {
        model: db.Roles,
        attributes: ["id", "url"],
        through: { attributes: [] },
      },
    ],
  });
  return roles ? roles : {};
};

module.exports = { getGroupWithRole };
