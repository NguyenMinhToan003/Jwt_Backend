import db from "../models/index";
const upBook = async (rawdata) => {
  try {
    const newImage = await db.Books.create({
      name: rawdata.name,
      urlImage: rawdata.urlImage,
    });
    return {
      EM: "Upload EBook Done!",
      EC: 0,
      DT: newImage,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "ERROR from Book",
      EC: -1,
      DT: "data",
    };
  }
};
module.exports = {
  upBook,
};
