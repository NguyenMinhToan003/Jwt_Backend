import db from "../models/index";
const readRole = async () => {
  try {
    let curentRole = await db.Roles.findAll({
      attributes: ["url", "description", "id"],
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
const getUserPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.Roles.findAndCountAll({
      raw: true,
      attributes: ["url", "description", "id"],
      offset: offset,
      limit: +limit,
      order: [["id", "DESC"]],
    });

    let totalPage = Math.ceil(count / limit); //so luong moi page
    let data = {
      totalRows: count,
      totalPage: totalPage,
      role: rows,
    };
    return {
      EM: `Role of Pagination ${page} and limit = ${limit}`,
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "not found data",
      EC: 2,
      DT: [],
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
const updateRole = async (rawRole) => {
  try {
    let role = await db.Roles.findOne({ where: { id: rawRole.id } });
    if (role) {
      role.update({
        url: rawRole.url,
        description: rawRole.description,
      });
      return {
        EC: 0,
        EM: `Update Role ${role.url} done !`,
        DT: "",
      };
    }
    return {
      EC: -2,
      EM: "Empty is Role",
      DT: "",
    };
  } catch (error) {
    return {
      EC: -1,
      EM: "ERROR from Server",
      DT: "",
    };
  }
};
const deleteRole = async (id) => {
  try {
    let role = await db.Roles.findOne({ where: { id: id } });
    if (role) {
      await role.destroy();
      return {
        EM: `Delete Role id : ${id} done !`,
        EC: 0,
        DT: "",
      };
    }
    return {
      EM: `Role is Empty`,
      EC: -2,
      DT: "",
    };
  } catch (error) {
    return {
      EC: -1,
      EM: "ERROR from Server",
      DT: "",
    };
  }
};
module.exports = {
  createRole,
  readRole,
  getUserPagination,
  updateRole,
  deleteRole,
};
