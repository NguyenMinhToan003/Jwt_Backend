import db from "../models/index";

const fetchListCart = async (list) => {
  try {
    let data = [];
    for (const item of list) {
      let addData = await db.Books.findOne({
        where: { id: item.id },
        raw: true,
      });
      data = [...data, addData];
    }
    return {
      EM: "Load Cart",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from Service",
      EC: -1,
      DT: "",
    };
  }
};

module.exports = {
  fetchListCart,
};
