import db from "../models/index";
const upBook = async (rawdata) => {
  try {
    const newImage = await db.Books.create({
      name: rawdata.name,
      urlImage: rawdata.urlImage,
      author: rawdata.author,
      date: rawdata.date,
      description: rawdata.description,
      vote: +rawdata.vote,
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
      DT: "",
    };
  }
};
const readAll = async () => {
  try {
    // let data = await db.Books.findAndCountAll({ limit: 4 });
    let data = await db.Books.findAll();
    return {
      EC: 0,
      EM: "Get EBook Ok",
      DT: data,
    };
  } catch (error) {
    return {
      EC: -1,
      EM: "ERROR from Book",
      DT: "",
    };
  }
};
module.exports = {
  upBook,
  readAll,
};
