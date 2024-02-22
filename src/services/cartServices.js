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
    console.log(data);
    return {
      EM: "Load Cart",
      EC: 0,
      DT: data,
    }; // Returning the fetched data
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data from Cart"); // Throwing an error to handle it outside
  }
};

module.exports = {
  fetchListCart,
};
